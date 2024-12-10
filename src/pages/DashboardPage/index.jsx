import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AfterLoginHeader from "../../components/AfterLoginHeader";
import LineChartComponent from "../../components/LineChart";
import { STATS_DATA } from "../../data/mock-data";
import StatsCard from "../../components/StatsCard";
import TableComponent from "../../components/Table";

export default function DashboardPage() {
  const tableHeading = [
    {
      label: "Name",
      key: "name",
      style: { width: "200px" },
    },
    {
      label: "Role",
      key: "role",
      style: { width: "150px" },
    },
    {
      label: "Email",
      key: "email",
      style: { width: "200px" },
    },
    {
      label: "Phone Number",
      key: "phone",
      style: { width: "150px" },
    },
    {
      label: "Status",
      key: "status",
      renderValue: (value) =>
        value === "active" ? (
          <p className="activeStatus">Active</p>
        ) : (
          <p className="deActiveStatus">Inactive</p>
        ),
      style: { width: "100px" },
    },
  ];

  const tableData = [
    {
      name: "John Doe",
      role: "Driver",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      status: "active",
    },
    {
      name: "Jane Smith",
      role: "Passenger",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      status: "inactive",
    },
    {
      name: "Chris Johnson",
      role: "Driver",
      email: "chris.johnson@example.com",
      phone: "111-222-3333",
      status: "active",
    },
    {
      name: "Emily Davis",
      role: "Passenger",
      email: "emily.davis@example.com",
      phone: "444-555-6666",
      status: "inactive",
    },
    {
      name: "David Brown",
      role: "Driver",
      email: "david.brown@example.com",
      phone: "777-888-9999",
      status: "active",
    },
  ];

  return (
    <div>
      <AfterLoginHeader>
        <Container fluid>
          <Row>
            <Col md={7}>
              <LineChartComponent />
            </Col>
            <Col md={5}>
              <Row className="gy-3">
                {STATS_DATA?.map((e, index) => (
                  <Col md={6} key={index}>
                    <StatsCard data={e} />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={12}>
              <TableComponent
                tableData={tableData}
                tableHeading={tableHeading}
              />
            </Col>
          </Row>
        </Container>
      </AfterLoginHeader>
    </div>
  );
}
