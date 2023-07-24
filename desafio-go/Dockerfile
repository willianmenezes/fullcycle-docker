FROM scratch as final

FROM golang:1.20.6-alpine3.18 as build

WORKDIR /app

COPY . .

RUN go mod init rocks && \
    CGO_ENABLED=0 go build .

FROM final 
WORKDIR /app
COPY --from=build /app/rocks .
ENTRYPOINT ["./rocks"]