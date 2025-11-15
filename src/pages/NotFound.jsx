import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gray-50">
      <Container>
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>
        <p className="text-gray-600 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Button variant="primary" as={Link} to="/">
          Go Back Home
        </Button>
      </Container>
    </section>
  );
};

export default NotFound;
