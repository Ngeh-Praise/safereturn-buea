Here is the revised `README.md` file without the document references:

---

# SafeReturn Buea

## Project Overview

**SafeReturn Buea** is a web-based community alert and response platform designed to address the growing concern of missing persons in Buea, Cameroon. The platform provides a centralized, structured digital environment for families, community members, and authorities to report, track, and share critical information regarding missing individuals, moving beyond the limitations of informal channels like WhatsApp or Facebook.

## Key Features

* **Centralized Reporting**: Verified submission of missing person reports, including photos and incident details.
* **Admin Verification**: A robust workflow that allows administrators to review and approve reports to ensure data accuracy.
* **Community Interaction**: Registered community members can submit tips, sightings, or recovery information for active cases.
* **Case Lifecycle Management**: Support for case statuses including "Active," "Found," and "Archived."
* **Responsive UI**: A mobile-friendly design optimized for community members to browse cases on the go.

## Tech Stack

* **Frontend**: React.js, Tailwind CSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Communications**: SMS API integration architecture

## Database Schema

The database is structured to ensure data integrity across users, reports, tips, and SMS logs. The schema includes:

* **USER**: Stores credentials and roles (admin vs. user).
* **MissingPersons**: Stores incident reports with approval and status flags.
* **COMMUNITY_MEMBER_TIP**: Manages incoming leads linked to specific cases.
* **SMS_LOG**: Tracks automated emergency broadcasts.

## Known Limitations and Future Work

Due to the constraints of the final-year academic project timeline, the following areas remain in development or testing:

* **Dynamic Data Fetching**: While API endpoints are functional, the complete frontend-to-backend synchronization for dynamic rendering of active cases is partially implemented and requires further debugging.
* **SMS Integration**: The system architecture for SMS alerts is established, but final production-level connectivity with the external SMS gateway is pending final testing.
* **Advanced Features**: Future iterations are planned to include real-time mapping integration, automated duplicate detection using machine learning, and multi-language support.

## Methodology

The project followed an **Agile** development approach, transitioning through Requirement Analysis, System Design, Implementation, Testing, and Deployment. We prioritized building a secure, stable, and verified database foundation to ensure the platform meets the critical humanitarian needs of the Buea community.

---

*Developed by Group 7 (ETTA ASEM ACHILE, NGEH PRAISE, EBONG SUME JOE STELLA, MICHAEL TABUFOR, TIBI LEONEL, ASONGAFAC DESMOND) as part of the CSC404 Project.*