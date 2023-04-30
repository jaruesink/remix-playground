FROM mcr.microsoft.com/devcontainers/universal:2

# Install PostgreSQL
RUN apt-get update \
    && apt-get install -y --no-install-recommends postgresql postgresql-contrib \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set up PostgreSQL environment variables
ENV POSTGRES_USER=myuser \
    POSTGRES_PASSWORD=mypassword \
    POSTGRES_DB=mydatabase

# Initialize PostgreSQL data directory and set proper ownership
RUN mkdir -p /var/lib/postgresql/data \
    && chown -R postgres:postgres /var/lib/postgresql/data

# Switch to the postgres user to initialize the database
USER postgres

# Initialize the PostgreSQL database
RUN pg_ctl initdb -D /var/lib/postgresql/data \
    && echo "host all  all    0.0.0.0/0  md5" >> /var/lib/postgresql/data/pg_hba.conf \
    && echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf

# Expose the PostgreSQL port
EXPOSE 5432

# Switch back to the root user
USER root

# Start PostgreSQL when the container starts
CMD ["sh", "-c", "service postgresql start && sleep infinity"]