function validate(field)
{
    if(field.name === "firstName")
    {
        if(field.value.trim() !== "" && /^[a-zA-Z\s]*$/.test(field.value.trim()))
        {
            document.querySelector("#first").classList.add("error");
        }
        else
        {
            document.querySelector("#first").classList.remove("error");
            return;
        }
    }
    else if(field.name === "lastName")
    {
        if(field.value.trim() !== "" && /^[a-zA-Z\s]*$/.test(field.value.trim()))
        {
            document.querySelector("#last").classList.add("error");
        }
        else
        {
            document.querySelector("#last").classList.remove("error");
            return;
        }
    }
    else if(field.name === "emailId")
    {
        if(field.value.trim() !== "" && /^[A-Za-z0-9+_.-]+@northeastern.edu$/.test(field.value.trim()))
        {
            document.querySelector("#email").classList.add("error");
        }
        else
        {
            document.querySelector("#email").classList.remove("error");
            return;
        }
    }
    else if(field.name === "phoneNumber")
    {
        if(field.value.trim() !== "" && /^\d{3}-\d{3}-\d{4}$/.test(field.value.trim()))
        {
            document.querySelector("#phone").classList.add("error");
        }
        else
        {
            document.querySelector("#phone").classList.remove("error");
            return;
        }
    }
    else if(field.name === "streetAddress1")
    {
        if(field.value.trim() !== "" && /^[^<>'\";`%]*$/.test(field.value.trim()))
        {
            document.querySelector("#addr1").classList.add("error");
        }
        else
        {
            document.querySelector("#addr1").classList.remove("error");
            return;
        }
    }
    else if(field.name === "streetAddress2")
    {
        if(/^[^<>'\";`%]*$/.test(field.value.trim()))
        {
            document.querySelector("#addr2").classList.add("error");
        }
        else
        {
            document.querySelector("#addr2").classList.remove("error");
            return;
        }
    }
    else if(field.name === "city")
    {
        if(field.value.trim() !== "" && /^[a-zA-Z]*$/.test(field.value.trim()))
        {
            document.querySelector("#ci").classList.add("error");
        }
        else
        {
            document.querySelector("#ci").classList.remove("error");
            return;
        }
    }
    else if(field.name === "state")
    {
        if(field.value.trim() !== "" && /^[a-zA-Z\s]*$/.test(field.value.trim()))
        {
            document.querySelector("#st").classList.add("error");
        }
        else
        {
            document.querySelector("#st").classList.remove("error");
            return;
        }
    }
    else if(field.name === "zipcode")
    {
        if(field.value.trim() !== "" && /^\d{5}$/.test(field.value.trim()))
        {
            document.querySelector("#zip").classList.add("error");
        }
        else
        {
            document.querySelector("#zip").classList.remove("error");
            return;
        }
    }
    else if(field.name === "custom")
    {
        if(field.value.trim() !== "")
        {
            document.querySelector("#cust").classList.add("error");
        }
        else
        {
            document.querySelector("#cust").classList.remove("error");
            return;
        }
    }
    else if(field.name === "text")
    {
        if(field.value.trim() !== "")
        {
            document.querySelector("#comm").classList.add("error");
        }
        else
        {
            document.querySelector("#comm").classList.remove("error");
            return;
        }
    }
}
function selectedOption(select)
{
    let selectedItem = select.value;
    document.getElementsByClassName("option1")[0].classList.add("hbt");
    document.getElementsByClassName("option1")[1].classList.add("hbt");
    document.getElementsByClassName("option1")[1].checked = false;

    document.getElementsByClassName("option2")[0].classList.add("cc");
    document.getElementsByClassName("option2")[1].classList.add("cc");
    document.getElementsByClassName("option2")[1].checked = false;

    document.getElementsByClassName("option3")[0].classList.add("lit");
    document.getElementsByClassName("option3")[1].classList.add("lit");
    document.getElementsByClassName("option3")[1].checked = false;

    document.getElementsByClassName("option4")[0].classList.add("es");
    document.getElementsByClassName("option4")[1].classList.add("es");
    document.getElementsByClassName("option4")[1].checked = false;

    document.getElementsByClassName("option5")[0].classList.add("la");
    document.getElementsByClassName("option5")[1].classList.add("la");
    document.getElementsByClassName("option5")[1].checked = false;

    document.getElementsByClassName("textarea")[0].classList.add("custom");
    document.getElementsByClassName("textarea")[1].classList.add("custom");
    document.getElementsByClassName("textarea")[1].checked = false;

    document.querySelector("#drink").classList.add("error");
    switch(selectedItem)
    {
        case "hbt":
            document.getElementsByClassName("option1")[0].classList.remove("hbt");
            document.getElementsByClassName("option1")[1].classList.remove("hbt");
            break;
        case "cc":
            document.getElementsByClassName("option2")[0].classList.remove("cc");
            document.getElementsByClassName("option2")[1].classList.remove("cc");
            break;
        case "lit":
            document.getElementsByClassName("option3")[0].classList.remove("lit");
            document.getElementsByClassName("option3")[1].classList.remove("lit");
            break;
        case "es":
            document.getElementsByClassName("option4")[0].classList.remove("es");
            document.getElementsByClassName("option4")[1].classList.remove("es");
            break;
        case "la":
            document.getElementsByClassName("option5")[0].classList.remove("la");
            document.getElementsByClassName("option5")[1].classList.remove("la");
            break;
        default:
            document.querySelector("#drink").classList.remove("error");
    }
}
function boxChecked(checkbox)
{
    if(checkbox.checked)
    {
        document.getElementsByClassName("textarea")[0].classList.remove("custom");
        document.getElementsByClassName("textarea")[1].classList.remove("custom");
    }
    else
    {
        document.getElementsByClassName("textarea")[0].classList.add("custom");
        document.getElementsByClassName("textarea")[1].classList.add("custom");
        document.querySelector("#cust").classList.add("error");
    }
}

function resetForm()
{
    document.getElementsByClassName("option1")[0].classList.add("hbt");
    document.getElementsByClassName("option1")[1].classList.add("hbt");

    document.getElementsByClassName("option2")[0].classList.add("cc");
    document.getElementsByClassName("option2")[1].classList.add("cc");

    document.getElementsByClassName("option3")[0].classList.add("lit");
    document.getElementsByClassName("option3")[1].classList.add("lit");

    document.getElementsByClassName("option4")[0].classList.add("es");
    document.getElementsByClassName("option4")[1].classList.add("es");

    document.getElementsByClassName("option5")[0].classList.add("la");
    document.getElementsByClassName("option5")[1].classList.add("la");

    document.getElementsByClassName("textarea")[0].classList.add("custom");
    document.getElementsByClassName("textarea")[1].classList.add("custom");
}

function socialChecked()
{
    document.getElementById("social").classList.add("error");
}
function  submitForm(){
    if(!document.querySelector("form").reportValidity())
        return;
    let title = document.getElementsByName("title");
    for(let i = 0; i < title.length; i++) {
        if(title[i].checked)
            title = title[i].value;
    }

    let firstName = document.getElementById("firstName").value.trim();

    if(firstName !== "" && /^[a-zA-Z\s]*$/.test(firstName))
        document.querySelector("#first").classList.add("error");
    else
    {
        document.querySelector("#first").classList.remove("error");
        return;
    }

    let lastName = document.getElementById("lastName").value.trim();

    if(lastName !== "" && /^[a-zA-Z\s]*$/.test(lastName))
        document.querySelector("#first").classList.add("error");
    else
    {
        document.querySelector("#first").classList.remove("error");
        return;
    }

    let emailId = document.getElementById("emailId").value.trim();

    if(emailId !== "" && /^[A-Za-z0-9+_.-]+@northeastern.edu$/.test(emailId))
        document.querySelector("#email").classList.add("error");
    else
    {
        document.querySelector("#email").classList.remove("error");
        return;
    }

    let phoneNumber = document.getElementById("phoneNumber").value.trim();

    if(phoneNumber !== "" && /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber))
        document.querySelector("#phone").classList.add("error");
    else
    {
        document.querySelector("#phone").classList.remove("error");
        return;
    }

    let streetAddress1 = document.getElementById("streetAddress1").value.trim();

    if(streetAddress1 !== "" && /^[^<>'\";`%]*$/.test(streetAddress1))
        document.querySelector("#addr1").classList.add("error");
    else
    {
        document.querySelector("#addr1").classList.remove("error");
        return;
    }

    let streetAddress2 = document.getElementById("streetAddress2").value.trim();

    if(/^[^<>'\";`%]*$/.test(streetAddress2))
        document.querySelector("#addr2").classList.add("error");
    else
        document.querySelector("#addr2").classList.remove("error");

    let city = document.getElementById("city").value.trim();

    if(city !== "" && /^[a-zA-Z]*$/.test(city))
        document.querySelector("#ci").classList.add("error");
    else
    {
        document.querySelector("#ci").classList.remove("error");
        return;
    }

    let state = document.getElementById("state").value.trim();

    if(state !== "" && /^[^<>'\";`%]*$/.test(state))
        document.querySelector("#st").classList.add("error");
    else
    {
        document.querySelector("#st").classList.remove("error");
        return;
    }

    let zipCode = document.getElementById("zipcode").value.trim();

    if(zipCode !== "" && /^\d{5}$/.test(zipCode))
        document.querySelector("#zip").classList.add("error");
    else
    {
        document.querySelector("#zip").classList.remove("error");
        return;
    }

    let referral = document.getElementsByName("source");
    let referralResult = "";

    for (let i = 0; i < referral.length; i++) {
        if (referral[i].checked) {
            referralResult += referral[i].value + ", ";
        }
    }
    referralResult = referralResult.slice(0, referralResult.length - 2);
    if(referralResult === "")
    {
        document.querySelector("#social").classList.remove("error");
        return;
    }

    let drink = document.getElementsByName("drinks");
    let selectedDrink = "";
    for(let i = 0; i < drink[0].length; i++) {
        if(drink[0][i].selected)
        {
            selectedDrink = drink[0][i].innerText;
            break;
        }
    }
    if(selectedDrink === "--Please choose a drink--")
    {
        document.querySelector("#drink").classList.remove("error");
        return;
    }
    let size = "Small";
    let customization = "";
    if(document.getElementsByName("hbt")[0].checked === true || document.getElementsByName("cc")[0].checked === true || document.getElementsByName("lit")[0].checked === true || document.getElementsByName("es")[0].checked === true || document.getElementsByName("la")[0].checked === true)
    {
        size = "Large";
        customization = document.getElementsByClassName("textarea")[1].value.trim();

        if(customization === "")
        {
            document.querySelector("#cust").classList.remove("error");
            return;
        }
    }

    let comments = document.getElementById("comments").value.trim();

    if(comments === "")
    {
        document.querySelector("#comm").classList.remove("error");
        return;
    }

    document.getElementById("table").innerHTML += `<tr>
									<td>${title}</td>
									<td>${firstName}</td>
									<td>${lastName}</td>
									<td>${emailId}</td>
									<td>${phoneNumber}</td>
									<td>${streetAddress1}</td>
									<td>${streetAddress2}</td>
									<td>${city}</td>
									<td>${state}</td>
									<td>${zipCode}</td>
									<td>${referralResult}</td>
									<td>${selectedDrink}</td>
									<td>${size}</td>
									<td>${customization}</td>
									<td>${comments}</td>
									</tr>`;

    document.querySelector("form").reset();
    resetForm();
}