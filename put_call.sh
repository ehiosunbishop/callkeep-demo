#!/bin/bash

function main {
    media=${1:-"audio"}
    id=${2:?"Caller ID should be specified"}
    name=${3:-"Unknown"}
    duration=${4:-0}
    token=${5:?"Enter device token that you received on register listener"}

    curl -v \
    -d "{\"aps\":{\"alert\":\"Incoming call\", \"content-available\":\"1\"}, \"media\": \"${media}\", \"id\": \"${id}\", \"name\": \"${name}\", \"duration\": \"${duration}\", \"token\": \"${token}\"}" \
    -H "apns-topic: com.demo.callkeep.voip" \
    -H "apns-push-type: voip" \
    -H "apns-priority: 10" \
    --http2 \
    --cert voipMain.pem \
"https://api.development.push.apple.com/3/device/${token}"
}

main $@

#./put_call.sh audio 3479024 "Bishop Ehiosun" 30 1e15db717673a007a1bcf1748fbb56f6e544ce13fb38dcbfa620959ab5b51403
