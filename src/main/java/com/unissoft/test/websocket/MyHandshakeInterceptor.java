package com.unissoft.test.websocket;

import java.util.Map;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

/**
 * 握手拦截器，继承HttpSessionHandshakeInterceptor类，做一些连接握手或者握手后的一些处理
 */
public class MyHandshakeInterceptor extends HttpSessionHandshakeInterceptor {
//	private static final Logger logger = LogManager.getLogger();

    // 握手前
    @Override
    public boolean beforeHandshake(ServerHttpRequest request,
                                   ServerHttpResponse response, WebSocketHandler wsHandler,
                                   Map<String, Object> attributes) throws Exception {
        System.out.println("++++++++++++++++ HandshakeInterceptor: beforeHandshake  ++++++++++++++"
                + attributes);
        return super.beforeHandshake(request, response, wsHandler, attributes);
    }

    // 握手后
    @Override
    public void afterHandshake(ServerHttpRequest request,
                               ServerHttpResponse response, WebSocketHandler wsHandler,
                               Exception ex) {
        System.out.println("++++++++++++++++ HandshakeInterceptor: afterHandshake  ++++++++++++++");
        super.afterHandshake(request, response, wsHandler, ex);
    }

}
