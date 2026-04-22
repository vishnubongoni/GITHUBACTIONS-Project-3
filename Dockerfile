FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY target/neo-ecommerce-1.0.0.jay app.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]