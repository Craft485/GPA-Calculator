!function () {
    console.warn("BETA Version 0.5")
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
        for (i = 0; i < gradeArr.length+1; i++) {
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
            console.log(a)
            console.log(i)
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