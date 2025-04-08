import GitHubCalendar from "react-github-calendar";

const GithubContributions = () => {
  return (
    <div className="flex justify-center border border-gray-600 p-4 rounded-lg shadow-lg bg-gray-300 dark:bg-gray-800 mx-0 md:mx-[7.5vh] mt-10">
      <GitHubCalendar
      username="imamhari"
      colorScheme="dark"
      blockSize={15}
      blockMargin={4}
      fontSize={14}
    />
    </div>
  );
};

export default GithubContributions;
