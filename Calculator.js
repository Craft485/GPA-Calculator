!function () {
    const gradeTable = document.querySelector('#tabs-41x > div.tab-table > table > tbody').children
    const grades = []
    let additiveGPA = 0

    for (let i = 0; i < gradeTable.length; i++) {
        const parser = /(honors|ap)?\s(honors|ap)?.*\n.*\t(\d+.\d+)/gi.exec(gradeTable[i].innerText.trim())
        if (parser) grades.push([parser[1] || parser[2] || null, parser[3]])
    }

    const ccpCount = prompt('Enter the number of CCP classes you are taking')

    for (let i = 0; i < parseInt(ccpCount); i++) {
        // Not yet handling bad input data
        const grade = prompt(`What is your grade in CCP class ${i + 1}? (Enter a decimal value)`)
        grades.push(['AP', parseFloat(grade)])
    }

    for (let i = 0; i < grades.length; i++) {
        const gradePercent = Math.round(grades[i][1])
        const classLvl = grades[i][0]

        if (92 <= gradePercent) { // 4.0+
            if (classLvl === 'AP') {
                additiveGPA += 4.8
            } else if (classLvl === 'HONORS') {
                additiveGPA += 4.4
            } else {
                additiveGPA += 4
            }
        } else if (90 <= gradePercent && gradePercent <= 91) { // 3.8-4.56
            if (classLvl === 'AP') {
                additiveGPA += 4.56
            } else if (classLvl === 'HONORS') {
                additiveGPA += 4.18
            } else {
                additiveGPA += 3.8
            }
        } else if (88 <= gradePercent && gradePercent <= 89) { // 3.2-3.84
            if (classLvl === 'AP') {
                additiveGPA += 3.84
            } else if (classLvl === 'HONORS') {
                additiveGPA += 3.52
            } else {
                additiveGPA += 3.2
            }
        } else if (82 <= gradePercent && gradePercent <= 87) { // 3-3.6
            if (classLvl === 'AP') {
                additiveGPA += 3.6
            } else if (classLvl === 'HONORS') {
                additiveGPA += 3.3
            } else {
                additiveGPA += 3
            }
        } else if (80 <= gradePercent && gradePercent <= 81) { // 2.8-3.36
            if (classLvl === 'AP') {
                additiveGPA += 3.36
            } else if (classLvl === 'HONORS') {
                additiveGPA += 3.08
            } else {
                additiveGPA += 2.8
            }
        } else if (78 <= gradePercent && gradePercent <= 79) { // 2.2-2.64
            if (classLvl === 'AP') {
                additiveGPA += 2.64
            } else if (classLvl === 'HONORS') {
                additiveGPA += 2.42
            } else {
                additiveGPA +=2.2
            }
        } else if (72 <= gradePercent && gradePercent <= 77) { // 2-2.4
            if (classLvl === 'AP') {
                additiveGPA += 2.4
            } else if (classLvl === 'HONORS') {
                additiveGPA += 2.2
            } else {
                additiveGPA += 2
            }
        } else if (70 <= gradePercent && gradePercent <= 71) { // 1.8-2.16
            if (classLvl === 'AP') {
                additiveGPA += 2.16
            } else if (classLvl === 'HONORS') {
                additiveGPA += 1.98
            } else {
                additiveGPA += 1.8
            }
        } else if (68 <= gradePercent && gradePercent <= 69) { // 1.2-1.44
            if (classLvl === 'AP') {
                additiveGPA += 1.44
            } else if (classLvl === 'HONORS') {
                additiveGPA += 1.32
            } else {
                additiveGPA += 1.2
            }
        } else if (62 <= gradePercent && gradePercent <= 67) { // 1-1.2
            if (classLvl === 'AP') {
                additiveGPA += 1.2
            } else if (classLvl === 'HONORS') {
                additiveGPA += 1.1
            } else {
                additiveGPA += 1
            }
        } else if (60 <= gradePercent && gradePercent <= 61) { // 0.8-0.96
            if (classLvl === 'AP') {
                additiveGPA += 0.96
            } else if (classLvl === 'HONORS') {
                additiveGPA += 0.88
            } else {
                additiveGPA += 0.8
            }
        } else if (gradePercent <= 59) { // F
            additiveGPA += 0
        }
    }
    alert(`Additive GPA: ${additiveGPA}\nNumber of classes taken: ${grades.length}\nFinal GPA: ${additiveGPA/grades.length}`)
}()
