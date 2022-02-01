async function getData() {
  let data = await fetch(
    `https://api.imgur.com/3/gallery/search/viral/month/1?q=top&q_type=jpg`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Client-ID 929660e585ce63e",
      },
    }
  )
    .then((res) => res.json())
    .then((ans) => displayData(ans));
}
getData();

function displayData({ data }) {
  console.log(data);
  let parent1 = document.getElementById("postParent1");
  let parent2 = document.getElementById("postParent2");
  let parent3 = document.getElementById("postParent3");
  let parent4 = document.getElementById("postParent4");
  let parent5 = document.getElementById("postParent5");
  data.forEach((el, i) => {
    let mainDiv = document.createElement("div");
    let title = document.createElement("p");
    title.innerText = el.title;

    let img = document.createElement("img");
    img.src = el?.images[0]?.link || "./images/demoimg.jpg";
    let views = document.createElement("p");
    views.innerText = "Views - " + el.views;

    let imgdiv = document.createElement("div");
    let textdiv = document.createElement("div");

    imgdiv.append(img);
    textdiv.append(title, views);

    mainDiv.append(imgdiv, textdiv);

    if (i <= 10) {
      parent1.append(mainDiv);
    } else if (i <= 20 && i > 10) {
      parent2.append(mainDiv);
    } else if (i <= 30 && i > 20) {
      parent3.append(mainDiv);
    } else if (i <= 40 && i > 30) {
      parent4.append(mainDiv);
    } else {
      parent5.append(mainDiv);
    }
  });
}
