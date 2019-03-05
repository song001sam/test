package com.unissoft.test.controller;


import javax.annotation.PostConstruct;

//import com.unissoft.test.utils.KafkaThread;
import com.unissoft.test.utils.PropertiesUtil;

import org.apache.commons.lang.StringUtils;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;


@Component
public class InitUtils {
    //private static final Logger logger = LogManager.getLogger();

    @PostConstruct
    public void Init() {
        System.out.println("初始化kafka消费者线程");
        //启动时候加载,创建线程 启动的时候直接创建线程，webSocket还没有创建，可能导致初始化创建线程失败
        String countStr = PropertiesUtil.getValue("taskCount");
        int count = 0;
        if (StringUtils.isNotBlank(countStr)) {
            count = Integer.parseInt(countStr);
        }
//    	for (int i = 1; i <= count; i++) {
//			Thread kafkaThread=new KafkaThread("task"+i);
//			kafkaThread.start();
//		}


    }
}