# XDR System Application

## Overview

This application is an XDR (Extended Detection and Response) system designed to connect to remote machines, collect system statistics, and run Ansible playbooks remotely. 

**Note:** The project is currently in development. Not all features are fully implemented or operational.

## Getting Started

Follow these steps to set up and start the server:

### Prerequisites

1. Ensure that you have `Node.js` installed on your system.
2. `Docker` is required for using the backend database.

### Installation

1. Clone the repository:

`git clone https://github.com/megaDeathChav/Cyber-Warden.git -b front-end`

2. Install the necessary packages:

`npm i`


### Database Setup

1. Run the `startup.sh` script to set up Docker containers. On Linux/Mac:

`bash startup.sh`

For Windows, execute each command in the script one by one.

### Environment Configuration

Create two environment files in the root of the project:

1. `.env` file:

`DATABASE_URL="postgresql://admin:password123@localhost:5432/test"`

2. `.env.local` file:

```
NEXTAUTH_SECRET=556ae13e18469af82782c526c368075ce62789580480de7942d4986696b8ec3c
NEXTAUTH_URL=http://localhost:3000
```


### Building and Running the Application

1. Build the project:

`npm run build`

2. Start the project in production mode:

`npm run start`


---

**Note:** As the project evolves, additional setup steps or changes might be necessary. Please refer to the latest documentation for updates.
 