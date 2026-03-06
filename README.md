🌍 GEOPULSE

Open Global Risk & Impact Dashboard

GeoPulse is an open-source geospatial dashboard that visualizes global conflict events, natural disasters, market volatility, and trade disruptions on a single interactive map.

The project aggregates structured datasets, normalizes them into a common format, and calculates a regional risk score to help users understand how different global events affect specific regions.

The system is designed to be modular, self-hostable, and easy to extend with new data sources.

Overview

Information about global crises is scattered across multiple platforms such as conflict databases, disaster monitoring systems, financial feeds, and trade reports.

GeoPulse brings these signals together into a single dashboard that provides a geographic overview of global risk.

The platform focuses on:

Clear geospatial visualization

Modular architecture

Structured datasets

Open-source extensibility

Core Idea

GeoPulse converts raw global event data into a regional risk score.

Each region receives a score calculated from multiple signals such as conflicts, disasters, market instability, and trade disruptions.

Example calculation:

Risk Score =
  Conflict Intensity +
  Disaster Severity +
  Market Volatility +
  Trade Disruption

This allows users to quickly understand which regions are experiencing higher levels of instability.

Features (MVP)

Interactive world map

Conflict event visualization

Disaster event mapping

Market volatility indicators

Trade disruption tracking

Layer-based filtering

Regional risk scoring

Sidebar analytics panel

Modular data ingestion

Tech Stack
Frontend

React

Leaflet / MapLibre

Axios

Recharts

Backend

Node.js

Express.js

MongoDB

Data Layer

Structured JSON datasets

Local dataset ingestion

Modular data adapters

Project Structure
GEOPULSE/

client/
 ├── components/
 ├── pages/
 ├── services/
 └── App.jsx

server/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── services/
 │     └── riskEngine.js
 ├── data/
 │     ├── conflicts.json
 │     ├── disasters.json
 │     ├── markets.json
 │     └── trade.json
 └── server.js

README.md
Data Strategy

GeoPulse does not depend on live external APIs.

The system can operate using:

Local datasets

Cached event data

Structured JSON files

This makes the platform suitable for offline environments such as demos, hackathons, or restricted networks.

Future versions can include optional API connectors.

Use Cases

GeoPulse can be used for:

Academic research

Crisis monitoring

Market risk visualization

Policy analysis

Data engineering demonstrations

Open data projects

Roadmap
Phase 1 — MVP

Data ingestion layer

Risk scoring engine

Interactive map with filters

Sidebar analytics panel

Phase 2 — Improvements

Timeline playback

Regional risk history

CSV export

Risk comparison tools

Phase 3 — Expansion

Optional live API connectors

WebSocket updates

Event alerts

Regional summaries

Contributing

Contributions are welcome.

Possible areas of contribution:

New datasets

Visualization improvements

Risk model enhancements

Additional data connectors

UI improvements

License

MIT License
