//package com.unissoft.test.configration;
//
////import com.unissoft.test.utils.KafkaThread;
//import com.unissoft.test.utils.PropertiesUtil;
//import com.unissoft.test.websocket.MyHandshakeInterceptor;
//import com.unissoft.test.websocket.MyWebSocketHandler;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//import org.springframework.web.socket.config.annotation.EnableWebSocket;
//import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
//import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
//
//@Configuration
//@EnableWebSocket
//public class WebSocketConfigration implements WebSocketConfigurer {
//    @Override
//    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/ccm1_1").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/ccm1_2").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/ccm1_3").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/ccm2_1").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/ccm2_2").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/ccm2_3").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/bof1_1").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/bof1_2").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/bof2_1").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/bof2_2").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/lf1_1").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        registry.addHandler(new MyWebSocketHandler(), "/ws/rh1_1").setAllowedOrigins("*").addInterceptors(new MyHandshakeInterceptor());
//
//        //init();
//
//    }
//    public void init(){
//        Logger logger = LogManager.getLogger();
//        logger.info("初始化kafka消费者线程");
//        //启动时候加载,创建线程 启动的时候直接创建线程，webSocket还没有创建，可能导致初始化创建线程失败
//        String countStr= PropertiesUtil.getValue("taskCount");
//        int count=0;
//        if(StringUtils.isNotBlank(countStr)){
//            count=Integer.parseInt(countStr);
//        }
//        for (int i = 1; i <= count; i++) {
//            Thread kafkaThread=new KafkaThread("task"+i);
//            kafkaThread.start();
//        }
//    }
//}
