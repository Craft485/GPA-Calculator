!function () {
    console.warn("BETA Version 0.5")
    console.warn(`If you notice elements on the page being removed, this is supposed to happen. \n 
    The scripts is putting the page in a state where it can more easily "scan" or "read" the pages contents prior calculating your GPA`)
    globalThis.additiveGPA = 0
    globalThis.gradeArr = []
    globalThis.classLevels = []
    document.getElementsByTagName("table")[3].rows[0].remove()
    !function findGrades () {
        // Loop through an push every grade number (unrounded)
        for (i = 0; i < document.getElementsByTagName("table")[3].rows.length; i++) {
            let v = Math.round(document.getElementsByTagName("table")[3].rows[i].cells[3].innerText.split(' ')[0])
            if (v !== "") gradeArr.push(v)
        }
        console.log("Found Grades: \n"+gradeArr)
        getClassLevels()
    }()
    // Loop through each class, fetch each classes level (Ap, Honors or cp)
    function getClassLevels () {
        for (i = 0; i < document.getElementsByTagName("table")[3].rows.length; i++) {
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
            } else if (isLunch) {
                document.getElementsByTagName("table")[3].rows[i].remove()
            }
        }
        console.log("Found class levels: \n"+classLevels)
        // calc()
    }
    // function calc() {
    //     for (i = 0; i < gradeArr.length; i++) {
    //         let grade =gradeArr[i]
    //         let level = classLevels[i]
    //         switch (grade, level) {
    //             case 100<=grade<=99:
    //             case level 
                    
    //                 break;
            
    //             default:
    //                 break;
    //         }
    //     }
    // }
}()