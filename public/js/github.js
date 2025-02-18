const githubUser = document.getElementById("github-user")

// Fetch GitHub user data
fetch(`./js/gituser-fallback.json`).then(res => res.json())
  .then(data => {
    console.log(data)
    const userCard = document.createElement('div')
    userCard.classList.add(...['flex', 'flex-col', 'bg-gray-100', 'p-5', 'my-5', 'mx-5', 'lg:me-10', 'lg:ms-0', 'rounded', 'w-[320px]'])
    userCard.innerHTML = `
    <img class="img-fluid rounded" src="https://avatars.githubusercontent.com/u/52546347?v=4" alt="Github Avatar" />
    <div class="flex flex-col">
      <div class="flex flex-col text-center py-3">
        <span class="uppercase permanent-marker-regular">${data.login}</span>
        <span>${data.name}</span>
      </div>
      <div class="flex justify-evenly">
        <div class="flex flex-col text-center border rounded p-2 mx-1 w-full">
          <span class="font-bold">REPOS</span>
          <span>${data.public_repos}</span>
        </div>
        <div class="flex flex-col text-center border rounded p-2 mx-1 w-full">
          <span class="font-bold">GISTS</span>
          <span>${data.public_gists}</span>
        </div>
        <a href="https://github.com/mneumatic" class="flex items-center justify-center border rounded p-2 mx-1 w-full"><svg xmlns="http://www.w3.org/2000/svg" width="36" viewBox="0 0 48 47"><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="#000" transform="translate(-700.000000, -560.000000)"><path d="M723.9985,560 C710.746,560 700,570.787092 700,584.096644 C700,594.740671 706.876,603.77183 716.4145,606.958412 C717.6145,607.179786 718.0525,606.435849 718.0525,605.797328 C718.0525,605.225068 718.0315,603.710086 718.0195,601.699648 C711.343,603.155898 709.9345,598.469394 709.9345,598.469394 C708.844,595.686405 707.2705,594.94548 707.2705,594.94548 C705.091,593.450075 707.4355,593.480194 707.4355,593.480194 C709.843,593.650366 711.1105,595.963499 711.1105,595.963499 C713.2525,599.645538 716.728,598.58234 718.096,597.964902 C718.3135,596.407754 718.9345,595.346062 719.62,594.743683 C714.2905,594.135281 708.688,592.069123 708.688,582.836167 C708.688,580.205279 709.6225,578.054788 711.1585,576.369634 C710.911,575.759726 710.0875,573.311058 711.3925,569.993458 C711.3925,569.993458 713.4085,569.345902 717.9925,572.46321 C719.908,571.928599 721.96,571.662047 724.0015,571.651505 C726.04,571.662047 728.0935,571.928599 730.0105,572.46321 C734.5915,569.345902 736.603,569.993458 736.603,569.993458 C737.9125,573.311058 737.089,575.759726 736.8415,576.369634 C738.3805,578.054788 739.309,580.205279 739.309,582.836167 C739.309,592.091712 733.6975,594.129257 728.3515,594.725612 C729.2125,595.469549 729.9805,596.939353 729.9805,599.18773 C729.9805,602.408949 729.9505,605.006706 729.9505,605.797328 C729.9505,606.441873 730.3825,607.191834 731.6005,606.9554 C741.13,603.762794 748,594.737659 748,584.096644 C748,570.787092 737.254,560 723.9985,560"/></g></g></svg></a>
      </div>
    </div>
  `
  githubUser.appendChild(userCard)
})


// Fetch GitHub user repositories
async function fetchGitHubRepos(username) {
  const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`)
  return await reposResponse.json()
}
