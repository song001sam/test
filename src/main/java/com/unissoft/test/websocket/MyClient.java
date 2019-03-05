package com.unissoft.test.websocket;

import java.io.IOException;
import java.net.URI;

import javax.websocket.ClientEndpoint;
import javax.websocket.ContainerProvider;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.WebSocketContainer;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;

@ClientEndpoint
public class MyClient {
//	private static final Logger logger = LogManager.getLogger();

    private Session session;

    @OnOpen
    public void onOpen(Session session) throws IOException {
        this.session = session;
    }

    @OnMessage
    public void onMessage(String message) {
    }

    @OnError
    public void onError(Throwable t) {
        System.out.println(t);
    }

    /**
     * 连接关闭调用的方法
     *
     * @throws Exception
     */
    @OnClose
    public void onClose() throws Exception {
    }

    /**
     * 关闭链接方法
     *
     * @param
     * @throws IOException
     */
    public void closeSocket() throws IOException {
        this.session.close();
    }

    /**
     * 发送消息方法。
     *
     * @param message
     * @throws IOException
     */
    public void sendMessage(String message) throws IOException {
        this.session.getBasicRemote().sendText(message);
    }

    //启动客户端并建立链接
    public void start(String uri) {
        WebSocketContainer container = ContainerProvider.getWebSocketContainer();
        try {
            this.session = container.connectToServer(MyClient.class, URI.create(uri));
        } catch (Exception e) {
//        	System.out.println(uri);
//        	e.printStackTrace();
            System.out.println("websocket失败，1秒重试");
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e1) {
                e1.printStackTrace();
            }
            start(uri);
        }
    }
}