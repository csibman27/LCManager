export const GET = async() => {
    const posts = 
    [
        {
            "userId": 1,
            "server_name": "Large_infant-12",
            "server_ip": "99.123.111.22",
            "server_id": 4619,
            "server_desc": "Student Server",
            "server_os": "Ubuntu 20.04 LTS",
            "server_idrac": "192.168.1.1",
            "server_services": [
                {
                    "service_id": "01204398",
                    "service_name": "Nagios"
                },
                {
                    "service_id": "099123445",
                    "service_name": "NTP"
                },
                {
                    "service_id": "777124642",
                    "service_name": "Bind9"
                },
                {
                    "service_id": "1239498753",
                    "service_name": "DNS"
                }
            ]
        },
        {
            "userId": 2,
            "server_name": "Nomous-11",
            "server_ip": "77.11.1.123",
            "server_id": 9111,
            "server_desc": "Boom Backups",
            "server_idrac": "100.12.100.11",
            "server_services": [
                {
                    "service_id": "01204398",
                    "service_name": "CACTI"
                },
                {
                    "service_id": "099123445",
                    "service_name": "NPX_Station"
                },
                {
                    "service_id": "777124642",
                    "service_name": "Arista-CVP"
                },
                {
                    "service_id": "1239498753",
                    "service_name": "Cert-master"
                }
            ]
        },
        {
            "userId": 3,
            "server_name": "Whirlpool-1",
            "server_ip": "11.12.1.109",
            "server_id": 1123,
            "server_desc": "Bomerang machine",
            "server_idrac": "192.168.4.4",
            "server_services": [
                {
                    "service_id": "01204398",
                    "service_name": "Blue-sky"
                },
                {
                    "service_id": "099123445",
                    "service_name": "GEFORCE-XT-mm"
                }
            ]
        }
    ]
    return new Response(JSON.stringify(posts), {
        headers: {
            "Content-type": "application/json",
        },
    })
}