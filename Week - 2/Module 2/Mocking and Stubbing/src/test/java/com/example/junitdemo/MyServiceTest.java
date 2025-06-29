package com.example.junitdemo;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Arrange: create mock
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");

        // Act: use the mock in the service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert: verify behavior
        assertEquals("Mock Data", result);
    }
}
