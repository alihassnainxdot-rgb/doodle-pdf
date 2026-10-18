FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=5000

WORKDIR /app
COPY backend/requirements.txt /app/backend/requirements.txt
RUN pip install --no-cache-dir -r /app/backend/requirements.txt
COPY backend/ /app/backend/
COPY index.html /app/index.html
COPY css/ /app/css/
COPY js/ /app/js/

EXPOSE 5000
CMD ["gunicorn", "--chdir", "/app/backend", "--bind", "0.0.0.0:5000", "--workers", "2", "--timeout", "300", "app:app"]
