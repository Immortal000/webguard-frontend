// Source of explicit words: https://data.world/natereed/banned-words-list
const swearWords = process.env.SWEAR_WORDS;

const swearArray = swearWords.split("\n")

var paragraphs = document.getElementsByTagName('p');
var heading1 = document.getElementsByTagName('h1');
var heading2 = document.getElementsByTagName('h2');
var heading3 = document.getElementsByTagName('h3');
var heading4 = document.getElementsByTagName('h4');
var heading5 = document.getElementsByTagName('h5');
var heading6 = document.getElementsByTagName('h6');
var spanArray = document.getElementsByTagName('span');
var atags = document.getElementsByTagName('a');
var em = document.getElementsByTagName('em');
var brArray = document.getElementsByTagName('br');
var div = document.getElementsByTagName('div');
var span = document.getElementsByTagName('span');


for (let i = 0; i < brArray.length; i++)
{
    var text = brArray[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    brArray[i].textContent = text;
}

for (let i = 0; i < span.length; i++)
{
    var text = span[i].innerText
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    span[i].innerText = text;
}

for (let i = 0; i < atags.length; i++)
{
    var text = atags[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    atags[i].innerText = text;
}

for (let i = 0; i < em.length; i++)
{
    var text = em[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    em[i].innerText = text;
}

for (let i = 0; i < paragraphs.length; i++)
{
    var text = paragraphs[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    paragraphs[i].innerText = text;
}

for (let i = 0; i < heading1.length; i++)
{
    var text = heading1[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    heading1[i].innerText = text;
}

for (let i = 0; i < heading2.length; i++)
{
    var text = heading2[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    heading2[i].innerText = text;
}

for (let i = 0; i < heading3.length; i++)
{
    var text = heading3[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        console.log(word)
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    heading3[i].innerText = text;
}

for (let i = 0; i < heading4.length; i++)
{
    var text = heading4[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    heading4[i].innerText = text;
}

for (let i = 0; i < heading5.length; i++)
{
    var text = heading5[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    heading5[i].innerText = text;
}

for (let i = 0; i < heading6.length; i++)
{
    var text = heading6[i].innerText
    let textArray = text.split(" ");
    textArray.forEach(word => {
        if (swearArray.includes(word.toLowerCase()))
        {
            text = text.replace(word, "[redacted]")
        }
    })

    heading6[i].innerText = text;
}