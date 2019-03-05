//package com.unissoft.test.utils;
//
//import java.util.Arrays;
//import java.util.List;
//import java.util.Properties;
//import java.util.concurrent.TimeUnit;
//
//import javax.xml.rpc.ServiceException;
//
//import com.unissoft.test.websocket.MyClient;
//
//
//import org.apache.commons.lang.StringUtils;
////import org.apache.logging.log4j.LogManager;
////import org.apache.logging.log4j.Logger;
//
//import kafka.consumer.*;
//import kafka.javaapi.consumer.ConsumerConnector;
//import kafka.message.MessageAndMetadata;
//import org.apache.commons.collections.CollectionUtils;
//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
//
//public class KafkaThread extends Thread {
//	private static final Logger logger = LogManager.getLogger();
//	private String taskStr;
//
//	/**
//	 * 构造函数
//	 *
//	 * @param taskStr
//	 *            配置参数中的任务id
//	 * @return
//	 */
//	public KafkaThread(String taskStr) {
//		this.taskStr = taskStr;
//	}
//
//	/**
//	 * 当前线程的run方法
//	 */
//	public void run() {
//		try {
//			this.exeKafka();
//		} catch (Exception e) {
////			logger.error(e);
//			e.printStackTrace();
//		}
//	}
//
//	/**
//	 * 自动调任务的方法
//	 *
//	 * @throws Exception
//	 */
//	public void exeKafka() throws Exception {
//		String servers = PropertiesUtil.getValue(taskStr + ".bootstrap.servers");
//		String groupId = PropertiesUtil.getValue(taskStr + ".group.id");
//		String topicStr = PropertiesUtil.getValue(taskStr + ".topic");
//		String socketUrl = PropertiesUtil.getValue(taskStr + ".websocket.url");
//		// 根据卑职文件获得subString
//		String subStrings = PropertiesUtil.getValue(taskStr + ".subString");
//		// 根据逗号切分成集合
//		List<String> subStrList = Arrays.asList(subStrings.split(","));
//
//		if (StringUtils.isBlank(servers) || StringUtils.isBlank(groupId) || StringUtils.isBlank(topicStr)
//				|| StringUtils.isBlank(socketUrl)) {
//			throw new ServiceException("kafk任务启动参数异常:servers:" + servers + ",groupId:" + groupId + ",topicStr:"
//					+ topicStr + ",socketUrl:" + socketUrl);
//		}
//
//		MyClient myClient = new MyClient();
//		myClient.start(socketUrl);
//
//		Properties properties = new Properties();
//		properties.put("zookeeper.connect", servers);
//		//properties.put("zookeeper.connect", "192.168.33.18:2181,192.168.33.21:2181,192.168.33.22:2181");
//
//		properties.put("auto.commit.enable", "true");
//		properties.put("auto.commit.interval.ms", "1000");
//		properties.put("rebalance.backoff.ms", "20000");
//		properties.put("group.id", groupId);
//
//		ConsumerConfig consumerConfig = new ConsumerConfig(properties);
//
//		ConsumerConnector javaConsumerConnector = Consumer.createJavaConsumerConnector(consumerConfig);
//
//		Whitelist whitelist = new Whitelist(topicStr);
//		List<KafkaStream<byte[], byte[]>> partitions = javaConsumerConnector.createMessageStreamsByFilter(whitelist);
//
//		if (CollectionUtils.isEmpty(partitions)) {
//			System.out.println("empty");
//			TimeUnit.SECONDS.sleep(1);
//		}
//		System.out.println("id not empty,partitions size is " + partitions.size());
//		// 消费消息 循环读partiion 这里就可以循环接收来自生产者的数据
//		for (KafkaStream<byte[], byte[]> partition : partitions) {
//			System.out.println("begin !");
//			ConsumerIterator<byte[], byte[]> iterator = partition.iterator();// 又partition
//																				// 获得迭代器
//			while (iterator.hasNext()) {
//				MessageAndMetadata<byte[], byte[]> next = iterator.next();
//				//System.out.println(new String(next.message(),"utf-8"));
//				// next.offset 显示偏移量 next.key ??? next.message 接收到的数据的字节数组
//				//logger.info("offset = %d, key = %s, value = %s\n", next.offset(), next.key(),
//						//new String(next.message(), "utf-8"));
////				System.out.println(next);
//				try {
//					// 解析 kafka 中获得的数据
//					if (subStrList != null && subStrList.size() > 0) {
//						//将数据根据"|"切分成List集合
//
//						List<String> msgList = Arrays.asList(new String(next.message(), "utf-8").split("\\|"));
//						String retStr = "";// 空串
//						for (String index : subStrList) {
//							//subStrlist 是我们要得到kafka数据顺序的集合
//							if (StringUtils.isBlank(retStr)) {// 如果是空串 第一次
//								retStr = msgList.get(Integer.parseInt(index) - 1);
//							} else {
//								//将我们需要的数据以逗号的方式分割拼接
//								retStr = retStr + "," + msgList.get(Integer.parseInt(index) - 1);// 后续
//																									// 拼串
//							}
//						}
//						//发送给websocket客户
//						//System.out.println(retStr);
//						myClient.sendMessage(retStr);
//					} else {
//						//myClient.sendMessage(new String(next.message(), "utf-8"));
//						//System.out.println(new String(next.message(),"utf-8"));
//					}
//				} catch (Exception e) {
//					logger.debug(
//							e);
//					//myClient.sendMessage(new String(next.message(), "utf-8"));
//					//System.out.println(new String(next.message(),"utf-8"));
//				}
//			}
//		}
//	}
//
//	// public void exeKafka() throws Exception{
//	// String servers=PropertiesUtil.getValue(taskStr+".bootstrap.servers");
//	// String groupId=PropertiesUtil.getValue(taskStr+".group.id");
//	// String topicStr=PropertiesUtil.getValue(taskStr+".topic");
//	// String socketUrl=PropertiesUtil.getValue(taskStr+".websocket.url");
//	//
//	//
//	// if(StringUtils.isBlank(servers)
//	// ||StringUtils.isBlank(groupId)
//	// ||StringUtils.isBlank(topicStr)
//	// ||StringUtils.isBlank(socketUrl)){
//	// throw new
//	// ServiceException("kafk任务启动参数异常:servers:"+servers+",groupId:"+groupId+",topicStr:"+topicStr+",socketUrl:"+socketUrl);
//	// }
//	//
//	// MyClient myClient=new MyClient();
//	// myClient.start(socketUrl);
//	//
//	// Properties props = new Properties();
//	// props.put("bootstrap.servers", servers);
//	// props.put("group.id", groupId);
//	// props.put("enable.auto.commit", "true");
//	// props.put("auto.commit.interval.ms", "1000");
//	// props.put("key.deserializer",
//	// "org.apache.kafka.common.serialization.StringDeserializer");
//	// props.put("value.deserializer",
//	// "org.apache.kafka.common.serialization.StringDeserializer");
//	// props.put("key.serializer",
//	// "org.apache.kafka.common.serialization.StringSerializer");
//	// props.put("value.serializer",
//	// "org.apache.kafka.common.serialization.StringSerializer");
//	// KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
//	// consumer.subscribe(Arrays.asList(topicStr));
//	// while (true) {
//	//
//	// ConsumerRecords<String, String> records=
//	// consumer.poll(Duration.ofSeconds(1));
//	// for (ConsumerRecord<String, String> record : records){
//	// System.out.printf("offset = %d, key = %s, value = %s\n", record.offset(),
//	// record.key(), record.value());
//	// myClient.sendMessage(record.value());
//	// }
//	//
//	// }
//	// }
//
//}
