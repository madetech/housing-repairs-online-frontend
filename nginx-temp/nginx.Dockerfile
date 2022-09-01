FROM nginx:1.21.6

COPY ./*.sh /docker-entrypoint.d
COPY ./default.conf /etc/nginx/templates/default.conf.template

HEALTHCHECK --interval=30s --timeout=10s --retries=6 CMD curl --fail http://localhost:80/health || exit 1
