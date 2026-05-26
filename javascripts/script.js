function convertTwitchClip(url) {

    const clipId = url.split("/clip/")[1];

    return `https://clips.twitch.tv/embed?clip=${clipId}&parent=r4lek.github.io`;
}

document.getElementById("twitchClip").src =
convertTwitchClip(twitchClipUrl);
