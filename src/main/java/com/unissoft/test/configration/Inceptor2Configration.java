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

//@Configuration
//@MapperScan(basePackages = "com.unissoft.test.mapper.inceptor2", sqlSessionTemplateRef = "inceptorSqlSessionTemplate2")
public class Inceptor2Configration {
    @Value("${spring.datasource.Inceptor2.url}")
    private String dbUrl;
    @Value("${spring.datasource.Inceptor2.username}")
    private String username;
    @Value("${spring.datasource.Inceptor2.password}")
    private String password;
    @Value("${spring.datasource.Inceptor2.driver-class-name}")
    private String driverClassName;
    @Value("${spring.datasource.Inceptor2.initialSize}")
    private int initialSize;
    @Value("${spring.datasource.Inceptor2.minIdle}")
    private int minIdle;
    @Value("${spring.datasource.Inceptor2.maxActive}")
    private int maxActive;
    @Value("${spring.datasource.Inceptor2.maxWait}")
    private int maxWait;
    @Value("${spring.datasource.Inceptor2.timeBetweenEvictionRunsMillis}")
    private int timeBetweenEvictionRunsMillis;
    @Value("${spring.datasource.Inceptor2.minEvictableIdleTimeMillis}")
    private int minEvictableIdleTimeMillis;
    @Value("${spring.datasource.Inceptor2.validationQuery}")
    private String validationQuery;
    @Value("${spring.datasource.Inceptor2.testWhileIdle}")
    private boolean testWhileIdle;
    @Value("${spring.datasource.Inceptor2.testOnBorrow}")
    private boolean testOnBorrow;
    @Value("${spring.datasource.Inceptor2.testOnReturn}")
    private boolean testOnReturn;
    @Value("${spring.datasource.Inceptor2.poolPreparedStatements}")
    private boolean poolPreparedStatements;
    @Value("${spring.datasource.Inceptor2.maxPoolPreparedStatementPerConnectionSize}")
    private int maxPoolPreparedStatementPerConnectionSize;
    @Value("${spring.datasource.Inceptor2.filters}")
    private String filters;
    @Value("${spring.datasource.Inceptor2.connectionProperties}")
    private String connectionProperties;
    @Value("${spring.datasource.Inceptor2.useGlobalDataSourceStat}")
    private boolean useGlobalDataSourceStat;

    @Bean("inceptorDataSource2")     //声明其为Bean实例
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

    @Bean(name = "inceptorSqlSessionFactory2")
    @Primary
    public SqlSessionFactory mysqlSqlSessionFactory(@Qualifier("inceptorDataSource2") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mybatis/inceptor2/*.xml"));
        return bean.getObject();
    }

    @Bean(name = "inceptorTransactionManager2")
    @Primary
    public DataSourceTransactionManager mysqlTransactionManager(@Qualifier("inceptorDataSource2") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean(name = "inceptorSqlSessionTemplate2")
    @Primary
    public SqlSessionTemplate mysqlSqlSessionTemplate(@Qualifier("inceptorSqlSessionFactory2") SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }
}