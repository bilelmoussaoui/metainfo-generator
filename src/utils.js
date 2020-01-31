import { ProjectType } from './consts'
import format from 'xml-formatter'

export const projectToManifest = project => {

  const {
    id,
    name,
    summary,
    description,
    developerName,
    updateContact,
    projectType
  } = project

    let doc = document.implementation.createDocument("", "", null)
    let componentElem = doc.createElement("component")
    componentElem.setAttribute("type", projectType)

    let idElem = doc.createElement("id")
    idElem.innerHTML = id
    componentElem.appendChild(idElem)


    if (projectType === ProjectType.DesktopApp) {
        let launchableElem = doc.createElement("launchable")
        launchableElem.setAttribute("type", "desktop-id")
        launchableElem.innerHTML = `${id}.desktop`
        componentElem.appendChild(launchableElem)
    }
    

    let nameElem = doc.createElement("name")
    nameElem.innerHTML = name
    componentElem.appendChild(nameElem)


    let summaryElem = doc.createElement("summary")
    summaryElem.innerHTML = summary
    componentElem.appendChild(summaryElem)




    if (description !== "") {
        let descriptionElem = doc.createElement("description")
        descriptionElem.innerHTML = description
        componentElem.appendChild(descriptionElem)
    }

    if (developerName !== "") {
        let developerElem = doc.createElement("developer_name")
        developerElem.innerHTML = developerName
        componentElem.appendChild(developerElem)
    }

    if (updateContact !== "") {
        let updateContactElem = doc.createElement("update_contact")
        updateContactElem.innerHTML = updateContact
        componentElem.appendChild(updateContactElem)
    }



    doc.appendChild(componentElem)

    
    let manifestXML = new XMLSerializer().serializeToString(doc.documentElement)
    manifestXML = `<?xml version="1.0" encoding="UTF-8"?>${manifestXML}`
    return format(manifestXML)
}