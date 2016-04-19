require 'em-websocket'
require 'pp'

admin_conn = []
count = 0

EM::WebSocket.start({:host => "0.0.0.0", :port => 8888}) do |ws|
  ws.onopen { |handshake|
    if handshake.path == '/admin'
      admin_conn << ws
    end
  }

  ws.onmessage do |message|
    count += 1
    admin_conn.each{|conn| conn.send(count.to_s) }
  end
end
