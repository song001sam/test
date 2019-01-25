package com.unissoft.test.configration;


import com.alibaba.druid.pool.DruidDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;
import java.sql.SQLException;

@Configuration
@MapperScan(basePackages = "com.unissoft.test.mapper.inceptor", sqlSessionTemplateRef = "inceptorSqlSessionTemplate")
public class InceptorConfigration {
    @Value("${spring.datasource.Inceptor.url}")
    private String dbUrl;
    @Value("${spring.datasource.Inceptor.username}")
    private String username;
    @Value("${spring.datasource.Inceptor.password}")
    private String password;
    @Value("${spring.datasource.Inceptor.driver-class-name}")
    private String driverClassName;
    @Value("${spring.datasource.Inceptor.initialSize}")
    private int initialSize;
    @Value("${spring.datasource.Inceptor.minIdle}")
    private int minIdle;
    @Value("${spring.datasource.Inceptor.maxActive}")
    private int maxActive;
    @Value("${spring.datasource.Inceptor.maxWait}")
    private int maxWait;
    @Value("${spring.datasource.Inceptor.timeBetweenEvictionRunsMillis}")
    private int timeBetweenEvictionRunsMillis;
    @Value("${spring.datasource.Inceptor.minEvictableIdleTimeMillis}")
    private int minEvictableIdleTimeMillis;
    @Value("${spring.datasource.Inceptor.validationQuery}")
    private String validationQuery;
    @Value("${spring.datasource.Inceptor.testWhileIdle}")
    private boolean testWhileIdle;
    @Value("${spring.datasource.Inceptor.testOnBorrow}")
    private boolean testOnBorrow;
    @Value("${spring.datasource.Inceptor.testOnReturn}")
    private boolean testOnReturn;
    @Value("${spring.datasource.Inceptor.poolPreparedStatements}")
    private boolean poolPreparedStatements;
    @Value("${spring.datasource.Inceptor.maxPoolPreparedStatementPerConnectionSize}")
    private int maxPoolPreparedStatementPerConnectionSize;
    @Value("${spring.datasource.Inceptor.filters}")
    private String filters;
    @Value("${spring.datasource.Inceptor.connectionProperties}")
    private String connectionProperties;
    @Value("${spring.datasource.Inceptor.useGlobalDataSourceStat}")
    private boolean useGlobalDataSourceStat;

    @Bean("inceptorDataSource")     //声明其为Bean实例
    public DataSource dataSource() {
        DruidDataSource datasource = new DruidDataSource();
        datasource.setUrl(this.dbUrl);
        datasource.setUsername(username);
        datasource.setPassword(password);
        datasource.setDriverClassName(driverClassName);

        //configuration
        datasource.setInitialSize(initialSize);
        datasource.setMinIdle(minIdle);
        datasource.setMaxActive(maxActive);
        datasource.setMaxWait(maxWait);
        datasource.setTimeBetweenEvictionRunsMillis(timeBetweenEvictionRunsMillis);
        datasource.setMinEvictableIdleTimeMillis(minEvictableIdleTimeMillis);
        datasource.setValidationQuery(validationQuery);
        datasource.setTestWhileIdle(testWhileIdle);
        datasource.setTestOnBorrow(testOnBorrow);
        datasource.setTestOnReturn(testOnReturn);
        datasource.setPoolPreparedStatements(poolPreparedStatements);
        datasource.setMaxPoolPreparedStatementPerConnectionSize(maxPoolPreparedStatementPerConnectionSize);
        datasource.setUseGlobalDataSourceStat(useGlobalDataSourceStat);
        try {
            datasource.setFilters(filters);
        } catch (SQLException e) {
            System.err.println("druid configuration initialization filter: " + e);
        }
        datasource.setConnectionProperties(connectionProperties);
        return datasource;
    }

    @Bean(name = "inceptorSqlSessionFactory")
    @Primary
    public SqlSessionFactory mysqlSqlSessionFactory(@Qualifier("inceptorDataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mybatis/inceptor/*.xml"));
        return bean.getObject();
    }

    @Bean(name = "inceptorTransactionManager")
    @Primary
    public DataSourceTransactionManager mysqlTransactionManager(@Qualifier("inceptorDataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean(name = "inceptorSqlSessionTemplate")
    @Primary
    public SqlSessionTemplate mysqlSqlSessionTemplate(@Qualifier("inceptorSqlSessionFactory") SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}