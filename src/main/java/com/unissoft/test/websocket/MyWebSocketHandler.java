package com.unissoft.test.websocket;

import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

public class MyWebSocketHandler implements WebSocketHandler {
//	private static final Logger logger = LogManager.getLogger();

    //保存用户链接
    private ConcurrentHashMap<String, WebSocketSession> users = new ConcurrentHashMap<String, WebSocketSession>();

    // 连接 就绪时
    @Override
    public void afterConnectionEstablished(WebSocketSession session)
            throws Exception {
        users.put(session.getId(), session);
        System.out.println("有新连接加入！当前在线人数为" + users.size());
    }

    // 处理信息
    @Override
    public void handleMessage(WebSocketSession session,
                              WebSocketMessage<?> message) throws Exception {
        //System.err.println(session + "---->" + message + ":"+ message.getPayload().toString());
        //给所有的session传递消息
        for (Entry<String, WebSocketSession> entry : users.entrySet()) {
            users.get(entry.getKey()).sendMessage(new TextMessage(message.getPayload().toString()));
        }
    }

    // 处理传输时异常
    @Override
    public void handleTransportError(WebSocketSession session,
                                     Throwable exception) throws Exception {
        System.out.println("发生错误");
        System.out.println(exception);
    }

    // 关闭 连接时
    @Override
    public void afterConnectionClosed(WebSocketSession session,
                                      CloseStatus closeStatus) {
        // logger.debug("用户： " + session.getRemoteAddress() + " is leaving, because:" + closeStatus);
        users.remove(session.getId());
        System.out.println("有一连接关闭！当前在线人数为" + users.size());
    }

    //是否支持分包
    @Override
    public boolean supportsPartialMessages() {
        return false;
    }
}