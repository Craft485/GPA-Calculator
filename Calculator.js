var gradeArr = []
//var elementArrId = [92, 97, 102, 107, 112, 117, 127]
var classLevelElementIdArr = [90, 95, 100, 105, 110, 115, 125]
var classLevels = []

function start() {
    //function to be called to run the script(for user reasons)
    getGrade()
}

// scan page for grade numbers and add them to the gradeArr
var getGrade = _=> {
    for (i = 1; i < document.getElementsByTagName("table")[2].rows.length--; i++) {
        let e = document.getElementsByTagName("table")[2].rows[i].children[3].innerHTML.split("<")[1].split(">")[1].split(" ")[0]
        if (e !== "") {
            gradeArr.push(e)
        } else {
            console.info("Removed empty string from array")
        }
    }
    /* if we have found all the grade percentages */
    if (gradeArr.length === 7) {
        getClassLevel()
    }
}
//find out which classes are honors ap etc
var getClassLevel = _=> {
    //for every class taken
    for (e = 0; e < classLevelElementIdArr.length; e++) {
        //get an array of the class name
        let classArr = document.getElementsByClassName("expandable-row")[classLevelElementIdArr[e]].innerHTML.split(" ")/*typeof should be arr*/
        //sift the array for the keywords "AP" and "Honors"
        var ap = classArr.find(Element => Element === "AP")
        var honors = classArr.find(Element => Element === "HONORS")
        if(ap === "AP") {
            classLevels.push("AP")
        } else if (honors === "HONORS") {
            classLevels.push("HONORS")
        } else {
            classLevels.push("CP")
        }
    }
    if (gradeArr.length === classLevels.length) {
        calcAdditiveGpa()
    }
}

var calcAdditiveGpa = _=> {
    let additiveGPA = 0
    for (a = 0; a < gradeArr.length; a++) {
        let gradePercent = Math.round(gradeArr[a])
        console.log(gradePercent)
        let classLvl = classLevels[a]

        if (92 <= gradePercent) { //4.0+
            if (classLvl === "AP") {
                additiveGPA += 4.8
            } else if (classLvl === "HONORS") {
                additiveGPA += 4.4
            } else if (classLvl === "CP") {
                additiveGPA += 4
            }
        } else if (90 <= gradePercent && gradePercent <= 91) { //3.8-4.56
            if (classLvl === "AP") {
                additiveGPA += 4.56
            } else if (classLvl === "HONORS") {
                additiveGPA += 4.18
            } else if (classLvl === "CP") {
                additiveGPA += 3.8
            }
        } else if (88 <= gradePercent && gradePercent <= 89) { //3.2-3.84
            if (classLvl === "AP") {
                additiveGPA += 3.84
            } else if (classLvl === "HONORS") {
                additiveGPA += 3.52
            } else if (classLvl === "CP") {
                additiveGPA += 3.2
            }
        } else if (82 <= gradePercent && gradePercent <= 87) { //3-3.6
            if (classLvl === "AP") {
                additiveGPA += 3.6
            } else if (classLvl === "HONORS") {
                additiveGPA += 3.3
            } else if (classLvl === "CP") {
                additiveGPA += 3
            }
        } else if (80 <= gradePercent && gradePercent <= 81) { //2.8-3.36
            if (classLvl === "AP") {
                additiveGPA += 3.36
            } else if (classLvl === "HONORS") {
                additiveGPA += 3.08
            } else if (classLvl === "CP") {
                additiveGPA += 2.8
            }
        } else if (78 <= gradePercent && gradePercent <= 79) { //2.2-2.64
            if (classLvl === "AP") {
                additiveGPA += 2.64
            } else if (classLvl === "HONORS") {
                additiveGPA += 2.42
            } else if (classLvl === "CP") {
                additiveGPA +=2.2
            }
        } else if (72 <= gradePercent && gradePercent <= 77) { //2-2.4
            if (classLvl === "AP") {
                additiveGPA += 2.4
            } else if (classLvl === "HONORS") {
                additiveGPA += 2.2
            } else if (classLvl === "CP") {
                additiveGPA += 2
            }
        } else if (70 <= gradePercent && gradePercent <= 71) { //1.8-2.16
            if (classLvl === "AP") {
                additiveGPA += 2.16
            } else if (classLvl === "HONORS") {
                additiveGPA += 1.98
            } else if (classLvl === "CP") {
                additiveGPA += 1.8
            }
        } else if (68 <= gradePercent && gradePercent <= 69) { //1.2-1.44
            if (classLvl === "AP") {
                additiveGPA += 1.44
            } else if (classLvl === "HONORS") {
                additiveGPA += 1.32
            } else if (classLvl === "CP") {
                additiveGPA += 1.2
            }
        } else if (62 <= gradePercent && gradePercent <= 67) { //1-1.2
            if (classLvl === "AP") {
                additiveGPA += 1.2
            } else if (classLvl === "HONORS") {
                additiveGPA += 1.1
            } else if (classLvl === "CP") {
                additiveGPA += 1
            }
        } else if (60 <= gradePercent && gradePercent <= 61) { //0.8-0.96
            if (classLvl === "AP") {
                additiveGPA += 0.96
            } else if (classLvl === "HONORS") {
                additiveGPA += 0.88
            } else if (classLvl === "CP") {
                additiveGPA += 0.8
            }
        } else if (gradePercent <= 59) {//F
            additiveGPA += 0
        }
        //console.log(a)
    }
    console.log("Additive GPA: " + additiveGPA)
    console.log("Number of classes taken: " + gradeArr.length)
    console.log("Final GPA: " + additiveGPA/gradeArr.length)
    return
}
start()
