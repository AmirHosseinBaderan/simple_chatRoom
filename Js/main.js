const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
    "Karmandet",
    "NEw Karmandet",
    "Test Karmandet",
    "بیخیال ما شو جون خودت",
    "اپلیکشین ما بیب"
]

const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "کارمند";
const PERSON_NAME = "امیر حسین بادران";

msgerForm.addEventListener("submit", event => {
    event.preventDefault();

    const msgText = msgerInput.value;
    let input = document.getElementById('choseFileInput');
    if (!msgText && !input.value) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText, input);
    msgerInput.value = "";

    botResponse();
});

function appendMessage(name, img, side, text, input) {
    let image = '';
    let id = "id" + Math.random().toString(16).slice(2);
    if (input.value != '') {
        image = `
      <div class="msg-image">
        <img  id="${id}"/>
      </div>`
    }
    const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        ${image}
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
    if (image !== '') saveImage(input, id);

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}

function botResponse() {
    const r = random(0, BOT_MSGS.length - 1);
    const msgText = BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
        appendMessage(BOT_NAME, BOT_IMG, "left", msgText, '');
    }, delay);
}

// Utils
function get(selector, root = document) {
    return root.querySelector(selector);
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function choseFile(id) {
    let input = document.getElementById(id);
    input.click();
}

function saveImage(input, imgId) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(input.files[0]);
    fileReader.addEventListener("load", () => {
        let img = document.getElementById(imgId);
        img.src = fileReader.result;
    });
}