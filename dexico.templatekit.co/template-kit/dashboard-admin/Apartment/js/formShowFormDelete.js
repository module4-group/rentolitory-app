$(document).ready(showApartmentListDelete);

function showApartmentListDelete() {
    let contentApartmentDelete = "";
    $.ajax({
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('authToken')
        },
        type: "GET",
        url: "http://localhost:8080/api/apartments/list",
        success: function (data) {
            for (let i = 0; i < data.content.length; i++) {
                if (data.content[i].activated == false) {
                    contentApartmentDelete += `
                <tr>
                <th scope="row">${data.content[i].id}</th>
                    <td>${data.content[i].name}</td>
                    <td>${data.content[i].roomNumber}</td>
                    <td>${data.content[i].area}</td>
                    <td>${data.content[i].numberOfBedroom}</td>
                    <td>${data.content[i].monthlyRent}</td>
                    <td>${data.content[i].maxTenants}</td>
                    <td>${data.content[i].building.buildingName}</td>
                    <td>${data.content[i].activated}</td>
                    
                </tr>`
                }

            }
            document.getElementById("showApartmentListDelete").innerHTML = contentApartmentDelete;


            console.log(data)
        }
    })
}

// function convertApartment(id){
//     $.ajax({
//         type: "PUT",
//         url: `http://localhost:8080/api/apartments/convert/${id}`,
//         success: showApartmentList
//     })
// }