function solution(id_list, report, k) {
    var answer = [];
    const reportObj = {}
    const reportCountObj = {}
    
    const newReport = report.map(e => e.split(" "))
    
    
    for(let i = 0 ; i < newReport.length ; i++){
        const [reportPerson, targetPerson] = newReport[i]
        
        if(reportObj[reportPerson]?.includes(targetPerson)) continue
        
        reportCountObj[targetPerson] = reportCountObj[targetPerson] + 1 || 1
        
        !reportObj[reportPerson] ? reportObj[reportPerson] = [targetPerson] : reportObj[reportPerson].push(targetPerson)
    }
    
    
    
    id_list.map((ele) => {
        const reportArr = reportObj[ele]
        let temp = 0
        for(let i = 0 ; i < reportArr?.length ; i++ ){
            const target = reportArr[i]
            reportCountObj[target] >= k ? temp ++ : temp
        }
        answer.push(temp)
    })
    
    
    
    return answer;
}