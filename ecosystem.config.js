module.exports = {
  apps: [
      {
          name: 'warp-web',
          script: 'node_modules/next/dist/bin/next',
          exec_mode: 'cluster',
          log_date_format: 'YYYY-MM-DD HH:mm:ss',
          instances: 'max',
          instance_var: 'INSTANCE_ID',
          env: {
              NODE_ENV: 'development',
          },
          env_production: {
              NODE_ENV: 'production',
          },
      },
  ],
};
