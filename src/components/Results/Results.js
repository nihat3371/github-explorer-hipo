import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import styles from "./Results.module.css";
import BackArrow from "../../assets/BackArrow.svg";
import LinkIcon from "../../assets/LinkIcon.svg";

const fmt = (n) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(n ?? 0);

function Results() {
  const { userName } = useParams();

  const [userData, setUserData] = useState();
  const [visible, setVisible] = useState(2);
  const [repos, setRepos] = useState([]);

  const navigate = useNavigate();

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      setVisible(2);
      setUserData(undefined);
      setRepos([]);
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`
        );
        if (!response.ok) {
          navigate("/NotFound", { replace: true });
          return;
        }
        const data = await response.json();
        setUserData(data);

        const repoResponse = await fetch(
          `${data.repos_url}?per_page=100&sort=updated`
        );
        const repoData = await repoResponse.json();
        if (Array.isArray(repoData)) {
          setRepos(repoData);
        }
      } catch (error) {
        navigate("/NotFound", { replace: true });
      }
    };

    fetchUserData();
  }, [userName, navigate]);

  if (!userData) {
    return <Loading />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Back"
          className={styles.backButton}
        >
          <img className={styles.backIcon} src={BackArrow} alt="" />
          <span>Back</span>
        </button>

        <a
          className={styles.githubLink}
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View on GitHub</span>
          <img className={styles.linkIcon} src={LinkIcon} alt="" />
        </a>
      </div>

      <div className={styles.profileHeader}>
        <img
          className={styles.avatar}
          src={userData.avatar_url}
          alt={`${userData.login} avatar`}
        />
        <div className={styles.profileInfo}>
          <div className={styles.name}>
            {userData.name || userData.login}
          </div>
          <div className={styles.login}>@{userData.login}</div>
          {userData.bio ? <p className={styles.bio}>{userData.bio}</p> : null}
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statValue}>
            {fmt(userData.public_repos)}
          </span>
          <span className={styles.statLabel}>Repositories</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{fmt(userData.following)}</span>
          <span className={styles.statLabel}>Following</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{fmt(userData.followers)}</span>
          <span className={styles.statLabel}>Followers</span>
        </div>
      </div>

      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Repositories</h2>
        <span className={styles.sectionMeta}>
          Recently updated · {Math.min(visible, repos.length)} of{" "}
          {fmt(userData.public_repos)}
        </span>
      </div>

      {repos.length === 0 ? (
        <p className={styles.emptyState}>No public repositories yet.</p>
      ) : (
        <ul className={styles.repoList}>
          {repos.slice(0, visible).map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoLink}
              >
                <div className={styles.repoMain}>
                  <div className={styles.repoName}>{repo.name}</div>
                  {repo.description ? (
                    <div className={styles.repoDesc}>{repo.description}</div>
                  ) : null}
                  <div className={styles.repoMeta}>
                    {repo.language ? (
                      <span className={styles.repoLanguage}>
                        <span
                          className={styles.languageDot}
                          aria-hidden="true"
                        />
                        {repo.language}
                      </span>
                    ) : null}
                    <span>
                      Updated{" "}
                      {new Date(repo.updated_at).toLocaleDateString("en", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className={styles.repoStars}>
                  <span aria-hidden="true">★</span>{" "}
                  {fmt(repo.stargazers_count)}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}

      {visible < repos.length ? (
        <button type="button" onClick={loadMore} className={styles.loadMore}>
          Load more
        </button>
      ) : null}
    </div>
  );
}

export default Results;
