const localhost = "https://baridzi.pythonanywhere.com"
// const localhost = "http://localhost:8000"

const apiURL = "/api"

const endpoint = `${localhost}${apiURL}`

//services
export const servicesURL = `${endpoint}/services/services/`
export const projectsURL = `${endpoint}/projects/projects/`
export const imagesURL = `${endpoint}/projects/images/`
export const adminsURL = `${endpoint}/users/admins/`
export const loginURL = `${endpoint}/users/login/`
export const createadminURL = `${endpoint}/users/create-admin/`
export const staffusersURL = `${endpoint}/staff/staff-users/`
export const newslettersURL = `${endpoint}/blog/newsletters/`


export const donationsURL = `${endpoint}/donations/donations/`
export const membershipsURL = `${endpoint}/membership/memberships/`
//MESSAGING


export const enquiriesURL = `${endpoint}/messaging/enquiries/`
