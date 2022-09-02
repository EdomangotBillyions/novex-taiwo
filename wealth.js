
const getPublicApis = async() => {
	let entriesOne = await fetch('https://api.publicapis.org/entries')
	let entriesTwo= await entriesOne.json();
	let finalEntries= entriesTwo.entries
	let finalResult= finalEntries.map(data => `<li> API: ${data.API}-----Description: ${data.Description}-----${data.Auth}-----HTTPS: ${data.HTTPS}-----Cors: ${data.Cors}-----Link: ${data.Link}-----Category: ${data.Category}</li> <br>`)

	return document.body.innerHTML = finalResult.join('');
}
getPublicApis()