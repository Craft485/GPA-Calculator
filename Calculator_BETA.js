!function () {
    console.warn("BETA Version 1")
    console.warn(`If you notice elements on the page being removed, this is supposed to happen. \n 
    The scripts is putting the page in a state where it can more easily "scan" or "read" the pages contents prior calculating your GPA`)
    globalThis.additiveGPA = 0
    globalThis.gradeArr = new Array
    globalThis.classLevels = new Array
    document.getElementsByTagName("table")[3].rows[0].remove()
    !function findGrades () {
        // Loop through an push every grade number (unrounded)
        for (i = 0; i < document.getElementsByTagName("table")[3].rows.length; i++) {
            // For some reason JS will use math operations on empty strings, so I can't round the fetched
            // element in the same line as the element was fetched because of course not
            // why would anyone do that, its not like that would be a perfectly reasonable thing to be able to do
            // but here we are
            let v = document.getElementsByTagName("table")[3].rows[i].cells[3].innerText.split(' ')[0]
            if (v !== "") gradeArr.push(Math.round(v))
        }
        console.log("Found Grades: \n"+gradeArr)
        getClassLevels()
    }()
    // Loop through each class, fetch each classes level (Ap, Honors or cp)
    function getClassLevels () {
        // +1 is to accommodate for lunch period
        // because we need graded in that apparently 
        for (i = 0; i < gradeArr.length; i++) {
            let a = document.getElementsByTagName("table")[3].rows[i].cells[1].innerText.split(' ')
            let honors = a.find(e=>e==="HONORS")
            let ap = a.find(e=>e==="AP")
            let isLunch = a.find(e=>e==="LUNCH")
            if (ap) {
                classLevels.push("AP")
            } else if (honors) {
                classLevels.push("HONORS")
            } else if (!ap && !honors && !isLunch) {
                classLevels.push("CP") //CP or regular, both(I think) are weighted the same
            }
        }
        console.log("Found class levels: \n"+classLevels)
        calc()
    }
    function calc() {
        for (i = 0; i < gradeArr.length; i++) {
            let gradePercent = gradeArr[i]
            let classLvl = classLevels[i]
            if (92 <= gradePercent && gradePercent <= 100) { //4.0+
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
        }
        const GPA = additiveGPA / gradeArr.length
        console.log(`Additive GPA: ${additiveGPA} \n GPA: ~${GPA}`)
        console.warn(
            "The way individual grades are rounded to be put onto the GPA scale varys from teaher to teacher\n"+
            "This GPA was calculated using standard rounding(.4 round down .5 round up) so see this as a middle ground for what you can expect your GPA to be."
        )
    }
}()