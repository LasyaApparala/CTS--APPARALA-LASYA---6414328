package com.example.junitdemo;

import org.junit.jupiter.api.*;

public class CalculatorTest {

    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        // Arrange: Initialize the object before each test
        calculator = new Calculator();
        System.out.println("⚙️ Setup: Calculator instance created");
    }

    @AfterEach
    public void tearDown() {
        // Teardown: Clean up after each test
        calculator = null;
        System.out.println("🧹 Teardown: Calculator instance set to null");
    }

    @Test
    public void testAddition() {
        // Arrange done in setUp()

        // Act
        int result = calculator.add(10, 5);

        // Assert
        Assertions.assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 5);
        Assertions.assertEquals(5, result);
    }
}
