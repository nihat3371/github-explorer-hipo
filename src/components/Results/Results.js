import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import styles from "./Results.module.css";
import BackArrow from "../../assets/BackArrow.svg";
import LinkIcon from "../../assets/LinkIcon.svg";

function Results() {
  const { userName } = useParams();
  const [userData, setUserData] = useState();
  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(2);

  const loadMore = () => {
    setVisible((prevValue) => prevValue + 2);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`
        );
        const data = await response.json();
        setUserData(data);

        const repoResponse = await fetch(data.repos_url);
        const repoData = await repoResponse.json();
        setRepos(repoData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [userName]);

  if (!userData) {
    return <Loading />;
  }

  return (
    <div className={styles.ResultContainer}>
      <div className={styles.userCard}>
        <div className={styles.userHeader}>
          <img
            onClick={() => navigate(-1)}
            className={styles.backArrow}
            src={BackArrow}
            alt="Back Arrow"
          />

          <div className={styles.imgContainer}>
            <img
              className={styles.userImg}
              src={userData.avatar_url}
              alt="User Avatar"
            />

            <h6 className={styles.userName}>{userData.name}</h6>
            <h6 className={styles.userLogin}> @{userData.login}</h6>
            <div className={styles.userLinkContainer}>
              <a href={userData.html_url} className={styles.userLink}>
                View on Github
              </a>
              <img className={styles.LinkIcon} src={LinkIcon} alt="Link Icon" />
            </div>
          </div>
        </div>
        <div className={styles.userHeader}>
          <div className={styles.userInfoBox}>
            {userData.public_repos}
            <br />
            <h1 className={styles.BoxText}>Repositories</h1>
          </div>
          <div className={styles.userInfoBox}>
            {userData.following}
            <br /> <h1 className={styles.BoxText}>Following</h1>
          </div>
          <div className={styles.userInfoBox}>
            {userData.followers}
            <br /> <h1 className={styles.BoxText}>Followers</h1>
          </div>
        </div>
      </div>
      <h6 className={styles.RepositoryText}>Repositories</h6>
      {repos.slice(0, visible).map((repo) => (
        <div key={repo.id} className={styles.repoCard}>
          <div className={styles.repoCardText}>
            <div className={styles.repoCardText}>{repo.name}</div>
            <div className={styles.repoCardDesc}>{repo.description}...</div>
          </div>
          <div className={styles.repoCardText}>
            <div className={styles.repoStar}>{repo.stargazers_count}</div>
            <div className={styles.repoStarDesc}>Stars</div>
          </div>
        </div>
      ))}
      <button onClick={loadMore} className={styles.ButtonMore}>
        Load More
      </button>
    </div>
  );
}

export default Results;
