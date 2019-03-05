
package com.unissoft.test.utils;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;


/**
 * Properties配置文件处理工具
 *
 * @author wdy
 */
public class PropertiesUtil {
//	private static final Logger logger = LogManager.getLogger();

    // 静态块中不能有非静态属性，所以加static
    private static Properties prop = null;

    //静态块中的内容会在类别加载的时候先被执行
    static {
        try {
            prop = new Properties();
            // prop.load(new FileInputStream(new File("C:\\jdbc.properties")));
            prop.load(PropertiesUtil.class.getClassLoader().getResourceAsStream("kafka.properties"));
            //prop.load(PropertiesUtil.class.getClassLoader().getResourceAsStream("jdbc.properties"));

            prop.load(PropertiesUtil.class.getClassLoader().getResourceAsStream("DeCode.properties"));
        } catch (FileNotFoundException e) {
            System.out.println(e);
        } catch (IOException e) {
            System.out.println(e);
        }
    }

    //静态方法可以被类名直接调用
    public static String getValue(String key) {
        return prop.getProperty(key);
    }
}