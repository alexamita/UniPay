# UniPay (Demo)

Overview
-->This project is a unified utility payments platform prototype designed to address the fragmented process of paying for electricity and water utilities. The system allows users to manage and pay for multiple utility meters and accounts—including both utility-issued meters/accounts and sub-metering vendor meters—from a single dashboard.

The project is built as a production-grade academic prototype, emphasizing correct domain modeling, system architecture, and realistic payment flows, while using simulated payments instead of live integrations.

Problem Statement
Utility payments are fragmented across:
-->Different utilities (electricity vs water)
-->Different billing models (prepaid vs postpaid)
-->Different providers (national utilities vs sub-meter vendors)

This fragmentation forces users to manage multiple identifiers, payment channels, and reconciliation processes.
This platform demonstrates how these processes can be unified under a single, coherent system.

Supported Scenarios
The system supports the following real-world scenarios:

Utility	        Billing Type	      Provider Type
Electricity	    Prepaid	              Utility meter
Electricity	    Prepaid	              Sub-meter vendor
Electricity	    Postpaid	          Utility account
Water	        Prepaid	              Sub-meter vendor
Water	        Postpaid	          Utility account

Each scenario is modeled explicitly and handled through appropriate logic paths.

Core Concepts & Domain Model
Key Terms
-->Utility: The service type (Electricity, Water)
-->Billing Type:
Prepaid — pay before consumption
Postpaid — pay after consumption
-->Provider Type:
Utility — national or county utility company
Sub-meter Vendor — apartment, property manager, or meter vendor

-->User Meter / Account:
A user-added entity representing a meter or billing account that can be paid for.

Key Features
User Features
-->User registration and authentication
-->Add and manage multiple utility meters/accounts
-->Support for prepaid and postpaid billing models
-->Unified dashboard showing all utilities
-->Simulated electricity token purchase
-->Simulated bill payments (full or partial)
-->Transaction history and receipts

System Features
-->Centralized meter/account model
-->Payment simulation engine
-->Transaction audit trail
-->Clear separation of utility, billing, and provider logic
-->Scalable architecture for future integrations

Dashboard Capabilities
The dashboard provides:
-->Summary KPIs (number of accounts, outstanding balances, recent payments)
-->Grouped utility accounts by:
Utility type
Billing type
Provider type
-->Context-aware actions (Buy Token, Pay Bill)
-->Recent transaction history with receipt access

Technology Stack
Frontend:
React
Tailwind CSS
Vite

Backend
Node.js
Express
Prisma ORM

Database
PostgreSQL (hosted on Supabase)

Tooling
Git & GitHub (version control)
JWT authentication
Simulated payment services



Payment Simulation
This project does not process real money.
All payments are simulated to:
-->Demonstrate payment orchestration logic
-->Model real prepaid and postpaid flows
-->Avoid regulatory and financial constraints

In a production system, these simulations will be replaced with:
-->Mobile money integrations
-->Bank and card payment gateways
-->Utility and vendor APIs

Limitations
-->No real payment processing
-->No real utility or vendor API integrations
-->Consumption data is simulated
-->Basic authentication (advanced KYC omitted)

These limitations are intentional for an academic prototype.

Future Enhancements
-->Live payment gateway integrations
-->Utility and vendor API connections
-->Auto-payment scheduling
-->Consumption analytics
-->Landlord / tenant account splitting
-->Admin and reconciliation dashboards
-->Mobile application support

Academic Context
This project was built as part of a university coursework project and is designed to demonstrate:
-->Real-world problem analysis
-->Correct domain modeling
-->Backend and frontend system design
-->Payment lifecycle understanding
-->Scalable software architecture

License
This project is for educational and demonstration purposes only.
