package com.unissoft.test.configration;


import java.sql.SQLException;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.alibaba.druid.pool.DruidDataSource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

@Configuration
//@MapperScan(basePackages = "com.unissoft.test.mapper.mysql", sqlSessionTemplateRef = "mysqlSqlSessionTemplate")
public class DruidConfigration {
    @Value("${spring.datasource.Druid.url}")
    private String dbUrl;
    @Value("${spring.datasource.Druid.username}")
    private String username;
    @Value("${spring.datasource.Druid.password}")
    private String password;
    @Value("${spring.datasource.Druid.driver-class-name}")
    private String driverClassName;
    @Value("${spring.datasource.Druid.initialSize}")
    private int initialSize;
    @Value("${spring.datasource.Druid.minIdle}")
    private int minIdle;
    @Value("${spring.datasource.Druid.maxActive}")
    private int maxActive;
    @Value("${spring.datasource.Druid.maxWait}")
    private int maxWait;
    @Value("${spring.datasource.Druid.timeBetweenEvictionRunsMillis}")
    private int timeBetweenEvictionRunsMillis;
    @Value("${spring.datasource.Druid.minEvictableIdleTimeMillis}")
    private int minEvictableIdleTimeMillis;
    @Value("${spring.datasource.Druid.validationQuery}")
    private String validationQuery;
    @Value("${spring.datasource.Druid.testWhileIdle}")
    private boolean testWhileIdle;
    @Value("${spring.datasource.Druid.testOnBorrow}")
    private boolean testOnBorrow;
    @Value("${spring.datasource.Druid.testOnReturn}")
    private boolean testOnReturn;
    @Value("${spring.datasource.Druid.poolPreparedStatements}")
    private boolean poolPreparedStatements;
    @Value("${spring.datasource.Druid.maxPoolPreparedStatementPerConnectionSize}")
    private int maxPoolPreparedStatementPerConnectionSize;
    @Value("${spring.datasource.Druid.filters}")
    private String filters;
    @Value("${spring.datasource.Druid.connectionProperties}")
    private String connectionProperties;
    @Value("${spring.datasource.Druid.useGlobalDataSourceStat}")
    private boolean useGlobalDataSourceStat;

    @Bean("mysqlDataSource")     //声明其为Bean实例
    @Primary  //在同样的DataSource中，首先使用被标注的DataSource

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

    @Bean(name = "mysqlSqlSessionFactory")
    @Primary
    public SqlSessionFactory mysqlSqlSessionFactory(@Qualifier("mysqlDataSource") DataSource dataSource) throws Exception {
        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
        bean.setDataSource(dataSource);
        bean.setMapperLocations(new PathMatchingResourcePatternResolver().getResources("classpath:mybatis/mysql/*.xml"));
        return bean.getObject();
    }

    @Bean(name = "mysqlTransactionManager")
    @Primary
    public DataSourceTransactionManager mysqlTransactionManager(@Qualifier("mysqlDataSource") DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

    @Bean(name = "mysqlSqlSessionTemplate")
    @Primary
    public SqlSessionTemplate mysqlSqlSessionTemplate(@Qualifier("mysqlSqlSessionFactory") SqlSessionFactory sqlSessionFactory) throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory);
    }

}