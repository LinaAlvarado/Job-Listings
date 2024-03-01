let dataJobs = []

const requestData = async () =>{
    const result = await fetch('data.json')
    return await result.json()
}

const fetchDataAndRender = async () =>{
    const jobs = await requestData()
    dataJobs = jobs
    renderData(dataJobs)
}

const renderData =(data)=>{
    console.log(data)
}

fetchDataAndRender()
