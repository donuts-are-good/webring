
# 🔗 webring

Webrings are a cool way that you and your friends can link your sites together and share visitors. Clicking the link takes you to the next site in the ring.


## 🤓 how-to

Starting a webring is easy, and takes about 5 minutes with these 3 steps.

  
### 🗒️ copy it!

Go [here](https://github.com/donuts-are-good/webring) and press the fork button. If you don't have a Github account, just click download. If you're feeling generous, also click the ☆ star button :)  
  
### 🚧 add sites!

In the files you just copied, you'll see one called `sites.list`. Put the sites you want in there one per line, and move to **step 3**!  
  
### 📡 send it!

Using the sample code in index.html or the code below, send the snippet to your friends and anybody else who wants to support your webring!  


![image](https://user-images.githubusercontent.com/96031819/213619576-21ca1cbe-4ffd-412a-8c53-50883c195da4.png)
  

### 🔬 example code

In this example, you can use text as a link, or even a button or image to click on. Use your imagination, this is only a barebones demo.

```
This site is part of the <a style="text-decoration: none" 
href="https://github.com/donuts-are-good/webring">donuts-are-good</a> webring :)
<br>
<a href="#" onclick="randomSite()">
    Click here to visit another site in the ring!
</a>
<script>
var sites = [];
var currentIndex = 0;
fetch('https://raw.githubusercontent.com/donuts-are-good/webring/master/sites.list')
.then(response => response.text())
.then(data => {
    sites = data.split('\n');
});
function randomSite() {
currentIndex = Math.floor(Math.random() * sites.length);
window.location.href = sites[currentIndex];
}
</script>
```


## Greetz!

The Dozens, code-cartel, coach, moritz, rbn, the garrison, ibmcd, stanley, fun shell scripting matrix, and the monster beverage company.
  

## License

This code uses the MIT license, not that anybody cares. If you don't know, then don't sweat it.  
  

Made with ♥ by 🍩 😋 **[donuts-are-good](https://github.com/donuts-are-good)**