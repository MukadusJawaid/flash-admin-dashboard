import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AfterLoginHeader from "../../components/AfterLoginHeader";
import LineChartComponent from "../../components/LineChart";
import { STATS_DATA } from "../../data/mock-data";
import StatsCard from "../../components/StatsCard";

export default function DashboardPage() {
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
          </Row>
        </Container>
      </AfterLoginHeader>
    </div>
  );
}
