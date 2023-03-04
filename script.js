const url = 'https://restcountries.com/v2/all'
const input = document.querySelector("#search")
const countries = document.querySelector(".countries")
const count = document.querySelector(".count")
const stastc = document.querySelector("#sta")
const statistics = document.querySelector(".statistics")

const wthname = document.querySelector("#wthname")
const nmerow = document.querySelector("#nmerow")
const wthcap = document.querySelector("#wthcap")
const caprow = document.querySelector("#caprow")
const wthpop = document.querySelector("#wthpop")
const poprow = document.querySelector("#poprow")

fetch(url)
    .then(response => response.json())
    .then(data => {

        let word = ""
        let contry = []

        for (let i = 0; i < data.length; i++) {
            contry.push({ "name": data[i].name, "population": data[i].population, "capital": data[i].capital, "index": i })
        }

        document.body.addEventListener('keypress', e => {

            //Input

            if (e.keyCode != 0) {

                if (e.keyCode >= 48 && e.keyCode <= 122) {

                    word = `${search.value}${e.key}`

                } else {

                    word = `${search.value}`

                }

            }

            console.log(word);

            //Inphas


            if (wthname.className != "wth") {

                contry = []

                for (let i = 0; i < data.length; i++) {

                    let nam = `${data[i].name}`
                    let name = nam.toLowerCase()
                    let Word = word.toLowerCase()

                    if (name.includes(`${Word}`) == 1) {

                        contry.push({ "name": data[i].name, "population": data[i].population, "capital": data[i].capital, "index": i })

                    }

                }


                if (wthcap.className == "wth1") {

                    contry.sort(function (x, y) {

                        return y.capital - x.capital

                    })

                }

                if (wthcap.className == "wth2") {

                    contry.sort(function (x, y) {

                        return x.capital - y.capital

                    })

                }

            } else if (wthcap.className != "wth") {

                contry = []

                for (let i = 0; i < data.length; i++) {

                    let cap = `${data[i].capital}`
                    let capit = cap.toLowerCase()
                    let Word = word.toLowerCase()

                    if (capit.includes(`${Word}`) == 1) {

                        contry.push({ "name": data[i].name, "population": data[i].population, "capital": data[i].capital, "index": i })

                    }

                }

                contry.sort((x, y) => {

                    if (x.capital < y.capital) return -1;
                    if (x.capital > y.capital) return 1;
                    return 0

                })

                if (wthcap.className == "wth2") {

                    contry.reverse()

                }

            } else if (wthpop.className != "wth") {

                contry = []

                for (let i = 0; i < data.length; i++) {

                    let nam = `${data[i].name}`
                    let name = nam.toLowerCase()
                    let Word = word.toLowerCase()

                    if (name.includes(`${Word}`) == 1) {

                        contry.push({ "name": data[i].name, "population": data[i].population, "capital": data[i].capital, "index": i })

                    }

                }

                if (wthpop.className == "wth1") {

                    contry.sort(function (x, y) {

                        return y.population - x.population

                    })

                }

                if (wthpop.className == "wth2") {

                    contry.sort(function (x, y) {

                        return x.population - y.population

                    })

                }

                console.log(contry);

            } else if (wthname.className && wthcap.className && wthpop.className == "wth") {

                contry = []

                for (let i = 0; i < data.length; i++) {

                    let nam = `${data[i].name}`
                    let name = nam.toLowerCase()
                    let Word = word.toLowerCase()

                    if (name.includes(`${Word}`) == 1) {

                        contry.push({ "name": data[i].name, "population": data[i].population, "capital": data[i].capital, "index": i })

                    }

                }


                if (wthcap.className == "wth1") {

                    contry.sort(function (x, y) {

                        return y.capital - x.capital

                    })

                }

                if (wthcap.className == "wth2") {

                    contry.sort(function (x, y) {

                        return x.capital - y.capital

                    })

                }

            }

            console.log(contry);

            if (contry.length != 0) {

                popfunc(contry)

            } else {
                statistics.innerHTML = ""
            }

            pushingcountry(contry)

        })

        //Arrow

        function pushingcountry(contry) {

            countries.innerHTML = ""

            for (let i = 0; i < contry.length; i++) {

                let a = contry[i].index

                const imgElement = document.createElement('img');
                const imgcount = document.createElement('div');
                const a1 = document.createElement('a');
                const a2 = document.createElement('a');
                const a3 = document.createElement('a');
                const a4 = document.createElement('a');

                imgElement.src = `${data[a].flags.png}`;
                imgElement.style.width = "200px"
                imgElement.style.height = "140px"
                imgElement.style.borderRadius = "10px"

                a1.textContent = `${contry[i].name}`
                a1.style.color = "rgb(252, 135, 51)"
                a1.style.marginTop = "10px"

                a2.textContent = `Capital: ${contry[i].capital}`
                a2.style.color = "black"
                a2.style.marginTop = "10px"
                a2.style.textAlign = "left"

                let lang = []
                for (let j = 0; j < data[a].languages.length; j++) {

                    lang.push(data[a].languages[j].name)

                }
                a3.textContent = `Languages: ${lang.join(", ").toString()}`
                a3.style.color = "black"
                a3.style.marginTop = "10px"
                a3.style.textAlign = "left"

                let pop = parseInt(contry[i].population).toLocaleString("en-US")

                a4.textContent = `Population: ${pop}`
                a4.style.color = "black"
                a4.style.marginTop = "10px"
                a4.style.textAlign = "left"

                imgcount.style.backgroundColor = "white"
                imgcount.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
                imgcount.style.fontSize = "20px"
                imgcount.style.borderRadius = "10px"
                imgcount.style.padding = "15px"
                imgcount.style.paddingBottom = "30px"
                imgcount.style.width = "min-content"
                imgcount.style.display = "flex"
                imgcount.style.flexDirection = "column"
                imgcount.style.height = "min-content"
                imgcount.style.margin = "0px"
                imgcount.style.flexWrap = "wrap"
                imgcount.style.margin = "10px"

                if (contry.length == 1) {

                    imgcount.style.marginLeft = "44%"

                }

                imgcount.appendChild(imgElement)
                imgcount.appendChild(a1)
                imgcount.appendChild(a2)
                imgcount.appendChild(a3)
                imgcount.appendChild(a4)
                countries.appendChild(imgcount);

            }

        }

        wthname.addEventListener("click", e => {

            caprow.className = ""
            wthcap.className = "wth"
            poprow.className = ""
            wthpop.className = "wth"

            if (nmerow.className == "") {

                wthname.className = "wth1"
                nmerow.className = "fa-solid fa-arrow-down"

            } else if (nmerow.className == "fa-solid fa-arrow-down") {

                wthname.className = "wth2"
                nmerow.className = "fa-solid fa-arrow-up"

            } else if (nmerow.className = "fa-solid fa-arrow-up") {

                wthname.className = "wth1"
                nmerow.className = "fa-solid fa-arrow-down"

            }

            contry = []

            for (let i = 0; i < data.length; i++) {

                let nam = `${data[i].name}`
                let name = nam.toLowerCase()
                let Word = word.toLowerCase()

                if (name.includes(`${Word}`) == 1) {

                    contry.push({ "name": data[i].name, "population": data[i].population, "capital": data[i].capital, "index": i })

                }

            }
            if (wthname.className == "wth2") {

                contry.reverse()

            }

            pushingcountry(contry)

            console.log(contry);


        })
        wthcap.addEventListener("click", e => {
            nmerow.className = ""
            wthname.className = "wth"
            poprow.className = ""
            wthpop.className = "wth"
            if (caprow.className == "") {
                wthcap.className = "wth1"
                caprow.className = "fa-solid fa-arrow-down"
            } else if (caprow.className == "fa-solid fa-arrow-down") {
                wthcap.className = "wth2"
                caprow.className = "fa-solid fa-arrow-up"
            } else if (caprow.className = "fa-solid fa-arrow-up") {
                wthcap.className = "wth1"
                caprow.className = "fa-solid fa-arrow-down"
            }

            contry = []

            for (let i = 0; i < data.length; i++) {

                let cap = `${data[i].capital}`
                let capit = cap.toLowerCase()
                let Word = word.toLowerCase()

                if (capit.includes(`${Word}`) == 1) {
                    contry.push({ "capital": data[i].capital, "name": data[i].name, "population": data[i].population, "index": i })
                }

            }

            contry.sort((x, y) => {

                if (x.capital < y.capital) return -1;
                if (x.capital > y.capital) return 1;
                return 0

            })

            if (wthcap.className == "wth2") {

                contry.reverse()

            }

            console.log(contry);

            pushingcountry(contry)

            popfunc(contry)

        })
        wthpop.addEventListener("click", e => {
            nmerow.className = ""
            wthname.className = "wth"
            caprow.className = ""
            wthcap.className = "wth"
            if (poprow.className == "") {
                wthpop.className = "wth1"
                poprow.className = "fa-solid fa-arrow-down"
            } else if (poprow.className == "fa-solid fa-arrow-down") {
                wthpop.className = "wth2"
                poprow.className = "fa-solid fa-arrow-up"
            } else if (poprow.className = "fa-solid fa-arrow-up") {
                wthpop.className = "wth1"
                poprow.className = "fa-solid fa-arrow-down"
            }

            if (wthpop.className == "wth1") {
                contry.sort(function (x, y) {
                    return y.population - x.population
                })
            }

            if (wthpop.className == "wth2") {
                contry.sort(function (x, y) {
                    return x.population - y.population
                })
            }

            pushingcountry(contry)

            console.log(contry);
        })

        pushingcountry(contry)

        //statistics

        console.log(data);

        let wordpop = 0
        for (let i = 0; i < data.length; i++) {
            wordpop = wordpop + contry[i].population
        }

        const popbtn = document.getElementById("popbtn")

        function popfunc(contry) {

            if (wthpop.className == "wth2") {
                contry.sort(function (x, y) {
                    return x.population - y.population
                })
            } else {
                contry.sort(function (x, y) {
                    return y.population - x.population
                })
            }

            statistics.innerHTML = ""

            if (wthpop.className == "wth2") {
                contry.sort(function (x, y) {
                    return x.population - y.population
                })
            } else {
                contry.sort(function (x, y) {
                    return y.population - x.population
                })
            }

            for (let i = 0; i <= contry.length; i++) {

                const countchild = document.createElement("div")
                const countname = document.createElement("div")
                const countprcent = document.createElement("div")
                const countnumb = document.createElement("div")
                const inprcent = document.createElement("div")

                if (i == "12") {
                    break
                }

                countchild.style.display = "flex"
                countchild.style.flexDirection = "row"
                countchild.style.justifyContent = "space-between"
                countchild.style.marginTop = "20px"
                countchild.style.height = "40px"

                countname.style.width = "20%"
                countname.style.fontSize = "25px"

                countprcent.style.width = "70%"

                inprcent.style.backgroundColor = "rgb(252, 135, 51)"
                inprcent.style.height = "35px"

                countnumb.style.width = "10%"
                countnumb.style.textAlign = "right"

                if (i == 0) {

                    countname.textContent = "word"

                    inprcent.style.width = "100%"

                    let pop = parseInt(wordpop).toLocaleString("en-US")

                    countnumb.textContent = pop

                } else {


                    ((contry[i - 1].population / wordpop * 100) <= 1) ? inprcent.style.width = `0.5%` : inprcent.style.width = `${contry[i - 1].population / wordpop * 100}%`
                    if ((contry[i - 1].population / wordpop * 100) == 0) {
                        inprcent.style.width = `${contry[i - 1].population / wordpop * 100}%`
                    }
                    countname.textContent = contry[i - 1].name

                    let pop = parseInt(contry[i - 1].population).toLocaleString("en-US")

                    countnumb.textContent = pop

                }

                countchild.appendChild(countname)
                countchild.appendChild(countprcent)
                countprcent.appendChild(inprcent)
                countchild.appendChild(countnumb)

                statistics.appendChild(countchild)

            }
        }

        popbtn.addEventListener("click", e => {

            popfunc(contry)

            console.log(contry);

        })

        const langbtn = document.getElementById("langbtn")

        langbtn.addEventListener("click", e => {

            statistics.innerHTML = ""

            window.scrollTo(0, document.body.scrollHeight);

            let allanguages = []

            for (let i = 0; i < contry.length; i++) {

                let a = contry[i].index

                for (let j = 0; j < data[a].languages.length; j++) {

                    allanguages.push(data[a].languages[j].name)

                }

            }

            const langset = new Set(allanguages);

            const languages = []

            for (const l of langset) {
                const filtred = allanguages.filter((lng) => lng === l)
                // console.log(filtred);
                languages.push({ lang: l, count: filtred.length })
            }

            languages.sort(function (x, y) {
                return y.count - x.count
            })

            for (let i = 0; i <= languages.length; i++) {

                const langchild = document.createElement("div")
                const langname = document.createElement("div")
                const langprcent = document.createElement("div")
                const langnumb = document.createElement("div")
                const inprcent = document.createElement("div")

                if (i == "12") {
                    break
                }

                langchild.style.display = "flex"
                langchild.style.flexDirection = "row"
                langchild.style.justifyContent = "space-between"
                langchild.style.marginTop = "10px"

                langname.style.width = "15%"

                langprcent.style.width = "75%"

                langnumb.style.width = "10%"
                langnumb.style.textAlign = "center"

                if (i == "0") {

                    langchild.style.marginBottom = "20px"

                    langname.textContent = "Languages"
                    langname.style.fontSize = "35px"
                    langname.style.width = "10%"

                    langprcent.textContent = "%"
                    langprcent.style.textAlign = "center"

                    langnumb.textContent = "how many country use"

                } else {


                    langname.textContent = languages[i - 1].lang
                    langname.style.fontSize = "25px"

                    inprcent.style.backgroundColor = "rgb(252, 135, 51)"
                    inprcent.style.width = `${(languages[i - 1].count) * 100 / languages[0].count}%`
                    inprcent.style.height = "35px"

                    let pop = parseInt(languages[i - 1].count).toLocaleString("en-US")

                    langnumb.textContent = pop
                }


                langchild.appendChild(langname)
                langchild.appendChild(langprcent)
                langprcent.appendChild(inprcent)
                langchild.appendChild(langnumb)

                statistics.appendChild(langchild)

            }

        })

        const up = document.getElementById("up")

        up.addEventListener("click", e => {
            window.scrollTo(document.body.scrollHeight, 0);
        })

        popfunc(contry)

        stastc.addEventListener("click", e => {

            statistics.innerHTML = ""

            popfunc(contry)

            window.scrollTo(0, document.body.scrollHeight);

        })


    })
    .catch(error => console.error(error));
