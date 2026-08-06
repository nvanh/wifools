/*

        // ─────────────────────────────────────────
        // DATA
        // ─────────────────────────────────────────
        const QUESTIONS = [
            {
                "title": "Câu 1: 다음을 듣고 가장 알맞은 그림 또는 그래프를 고르십시오.",
                "image": "",
                "score": 2,
                "answers": [
                    { "id": 1, "value": "", "url": "https://exam-bucket-v1.s3.ap-southeast-1.amazonaws.com/file/courses/1682664193_11f404b9cd9412ca4b85.jpg?response-content-disposition=attachment%3B&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYF46SVNCQBRCHMUA%2F20260728%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260728T011317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=172800&X-Amz-Signature=4ea0dc510493c299eac995f07b86fb489f5846904f07f90f2a10ee56e1ef5877", "valueVN": "" },
                    { "id": 2, "value": "", "url": "https://exam-bucket-v1.s3.ap-southeast-1.amazonaws.com/file/courses/1682664193_70972e45e0683f366679.jpg?response-content-disposition=attachment%3B&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYF46SVNCQBRCHMUA%2F20260728%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260728T011317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=172800&X-Amz-Signature=a2d78af3e20e593a61c64f8279d3edc42359d9fd19d22a1e77ed3a418a4b8992", "valueVN": "" },
                    { "id": 3, "value": "", "url": "https://exam-bucket-v1.s3.ap-southeast-1.amazonaws.com/file/courses/1682664193_450494535a7e8520dc6f.jpg?response-content-disposition=attachment%3B&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYF46SVNCQBRCHMUA%2F20260728%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260728T011317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=172800&X-Amz-Signature=73cb48837a37b9d5bd8ff5cf05b2869a71f2c80cab4f81ff5c3965696251dc9e", "valueVN": "" },
                    { "id": 4, "value": "", "url": "https://exam-bucket-v1.s3.ap-southeast-1.amazonaws.com/file/courses/1682664194_d3a65c5e93734c2d1562.jpg?response-content-disposition=attachment%3B&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYF46SVNCQBRCHMUA%2F20260728%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260728T011317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=172800&X-Amz-Signature=85999d6140111c816de22aa2d170315fda347dea726aaf14d9e1a97d8d860ff1", "valueVN": "" }
                ],
                "totalAnswer": 4,
                "audio": "https://exam-bucket-v1.s3.ap-southeast-1.amazonaws.com/file/courses/1682664194_2.mp3?response-content-disposition=attachment%3B&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAYF46SVNCQBRCHMUA%2F20260728%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260728T011317Z&X-Amz-SignedHeaders=host&X-Amz-Expires=172800&X-Amz-Signature=bde2a4009fb7ee9e9a3c027bd838f750ace348b3d9fd71596dc3adae87ffcfbb",
                "explain": "남자: 이 반지 어때요? 수미 씨한테 잘 어울릴 것 같은데요.\n여자: 그건 너무 비싸요. 다른 걸로 하는 게 좋겠어요.\n남자: 괜찮아요. 한번 껴 보고 마음에 들면 이 반지로 해요.",
                "title_translation": "Câu 1: Nghe đoạn hội thoại sau và chọn hình ảnh hoặc biểu đồ phù hợp nhất.",
                "explain_translation": "Nam: Chiếc nhẫn này thế nào? Tôi thấy nó có vẻ rất hợp với cô Sumi đấy.\nNữ: Cái đó đắt quá. Chọn cái khác thì tốt hơn.\nNam: Không sao đâu. Cô cứ đeo thử một lần xem, nếu thấy ưng ý thì lấy chiếc này."
            }
        ];
*/

const QUESTIONS = [
    {
        "title": "Câu 1. 다음을 듣고 가장 알맞은 그림 또는 그래프를 고르십시오.",
        "title_translation": "Câu 1. Nghe đoạn hội thoại sau và chọn hình ảnh hoặc biểu đồ phù hợp nhất.",
        "audio_file": "question_1.mp3",
        "explain": "1번. 한국어 교재를 찾고 있는데요. 오른쪽으로 가시면 어학 교재 모아 놓은 곳에 있습니다. 네. 감사합니다.",
        "explain_translation": "Câu 1. Tôi đang tìm giáo trình tiếng Hàn. / Nếu bạn đi về phía bên phải, nó nằm ở khu vực tập trung các giáo trình ngôn ngữ. / Vâng, tôi cảm ơn.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": null,
                "value_translation": null,
                "file": "question_1_1.jpg"
            },
            {
                "value": null,
                "value_translation": null,
                "file": "question_1_2.jpg"
            },
            {
                "value": null,
                "value_translation": null,
                "file": "question_1_3.jpg"
            },
            {
                "value": null,
                "value_translation": null,
                "file": "question_1_4.jpg"
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 2. 다음을 듣고 가장 알맞은 그림 또는 그래프를 고르십시오.",
        "title_translation": "Câu 2. Nghe đoạn hội thoại sau và chọn hình ảnh hoặc biểu đồ phù hợp nhất.",
        "audio_file": "question_2.mp3",
        "explain": "2번. 이곳에서 사진을 찍어도 될까요? 죄송하지만 박물관 안에서는 사진을 찍으시면 안 됩니다. 아, 그렇군요. 알겠습니다.",
        "explain_translation": "Câu 2. Tôi có thể chụp ảnh ở đây được không? / Xin lỗi nhưng bạn không được phép chụp ảnh bên trong bảo tàng. / À, ra vậy. Tôi hiểu rồi.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": null,
                "value_translation": null,
                "file": "question_2_1.jpg"
            },
            {
                "value": null,
                "value_translation": null,
                "file": "question_2_2.jpg"
            },
            {
                "value": null,
                "value_translation": null,
                "file": "question_2_3.jpg"
            },
            {
                "value": null,
                "value_translation": null,
                "file": "question_2_4.jpg"
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 3. 다음을 듣고 가장 알맞은 그림 또는 그래프를 고르십시오.",
        "title_translation": "Câu 3. Nghe đoạn hội thoại sau và chọn hình ảnh hoặc biểu đồ phù hợp nhất.",
        "audio_file": "question_3.mp3",
        "explain": "3번. 근무 시간을 선택해서 일할 수 있는 시간 선택제 근무의 형태가 늘어나고 있습니다. 미취업 여성을 대상으로 조사한 결과 시간 선택제로 일하고 싶은 이유로 육아라는 응답이 가장 많았습니다. 그다음이 개인 시간 활용, 근로 시간 단축, 건강 문제 등의 근무 시간은 8시간을 가장 선호하는 것으로 나타났습니다.",
        "explain_translation": "Câu 3. Hình thức làm việc theo chế độ chọn thời gian, cho phép lựa chọn giờ làm việc, đang ngày càng gia tăng. Theo kết quả khảo sát đối với phụ nữ chưa có việc làm, lý do muốn làm việc theo chế độ này nhiều nhất là để chăm sóc con cái. Tiếp theo là các lý do như tận dụng thời gian cá nhân, rút ngắn thời gian làm việc, vấn đề sức khỏe; và thời gian làm việc được ưa chuộng nhất là 8 tiếng.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": null,
                "value_translation": null,
                "file": "question_3_1.jpg"
            },
            {
                "value": null,
                "value_translation": null,
                "file": "question_3_2.jpg"
            },
            {
                "value": null,
                "value_translation": null,
                "file": "question_3_3.jpg"
            },
            {
                "value": null,
                "value_translation": null,
                "file": "question_3_4.jpg"
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 4. 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 4. Nghe đoạn hội thoại sau và chọn câu trả lời phù hợp nhất cho lời nói tiếp theo.",
        "audio_file": "question_4.mp3",
        "explain": "여자: 저, 예약을 하지 않았는데 빈방이 있을까요?\r\n남자: 네, 있습니다. 며칠 동안 계실 건가요?\r\n여자:",
        "explain_translation": "Nữ: Xin lỗi, tôi không đặt trước nhưng liệu còn phòng trống không ạ?\nNam: Vâng, còn ạ. Quý khách định ở lại trong bao nhiêu ngày ạ?\nNữ:",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "카드로 계산할게요.",
                "value_translation": "Tôi sẽ thanh toán bằng thẻ.",
                "file": null
            },
            {
                "value": "이틀 동안 있을 거예요.",
                "value_translation": "Tôi sẽ ở lại trong hai ngày.",
                "file": null
            },
            {
                "value": "오늘은 빈방이 없습니다.",
                "value_translation": "Hôm nay không còn phòng trống.",
                "file": null
            },
            {
                "value": "바다가 보이는 방으로 주세요.",
                "value_translation": "Cho tôi phòng nhìn ra biển.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 5. 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 5. Nghe đoạn hội thoại sau và chọn câu trả lời phù hợp nhất cho lời nói tiếp theo.",
        "audio_file": "question_5.mp3",
        "explain": "여자: 생일 축하합니다. 이건 제 선물이에요.\r\n남자: 고마워요. 저녁에 생일 파티를 할 건데 오실 수 있어요?\r\n여자:",
        "explain_translation": "Nữ: Chúc mừng sinh nhật. Đây là món quà của tôi.\nNam: Cảm ơn nhé. Tối nay tôi sẽ tổ chức tiệc sinh nhật, bạn có thể đến được không?\nNữ:",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": "어제 파티는 재미있었어요?",
                "value_translation": "Bữa tiệc hôm qua có vui không?",
                "file": null
            },
            {
                "value": "다른 일이 없으면 꼭 오세요.",
                "value_translation": "Nếu không có việc gì khác thì nhất định phải đến nhé.",
                "file": null
            },
            {
                "value": "여기 음식들이 모두 맛있어요.",
                "value_translation": "Thức ăn ở đây đều ngon cả.",
                "file": null
            },
            {
                "value": "미안해요. 저녁에 약속이 있어요. ",
                "value_translation": "Xin lỗi. Tối nay tôi có hẹn rồi.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 6. 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 6. Nghe đoạn hội thoại sau và chọn câu trả lời phù hợp nhất cho lời nói tiếp theo.",
        "audio_file": "question_6.mp3",
        "explain": "남자: 여권 사진을 찍으러 왔는데요.\r\n여자: 30분 정도 기다리셔야 하는데 괜찮으시겠어요?\r\n남자:",
        "explain_translation": "Nam: Tôi đến để chụp ảnh hộ chiếu.\nNữ: Bạn phải đợi khoảng 30 phút, liệu có ổn không ạ?\nNam:",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "이곳에서 기다리시면 됩니다.",
                "value_translation": "Bạn có thể đợi ở đây ạ.",
                "file": null
            },
            {
                "value": "사진이 잘 나와서 다행이에요.",
                "value_translation": "May quá ảnh chụp đẹp.",
                "file": null
            },
            {
                "value": "그럼 조금 후에 다시 올게요.",
                "value_translation": "Vậy lát nữa tôi sẽ quay lại.",
                "file": null
            },
            {
                "value": "오래 기다리게 해서 미안합니다.",
                "value_translation": "Xin lỗi vì đã để bạn phải đợi lâu.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 7. 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 7. Nghe đoạn hội thoại sau và chọn câu trả lời phù hợp nhất cho lời nói tiếp theo.",
        "audio_file": "question_7.mp3",
        "explain": "남자: 무슨 일이 있어요? 얼굴이 안 좋아 보여요.\r\n여자: 지하철에 우산을 두고 내렸어요. 어제 새로 산 건데...\r\n남자:",
        "explain_translation": "Nam: Có chuyện gì vậy? Sắc mặt bạn trông không tốt lắm.\nNữ: Tôi để quên ô trên tàu điện ngầm rồi. Đó là chiếc ô tôi mới mua hôm qua...\nNam:",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": "저도 지금 나가려고요.",
                "value_translation": "Tôi cũng đang định đi ra ngoài bây giờ.",
                "file": null
            },
            {
                "value": "집에 가서 쉬어야겠어요.",
                "value_translation": "Tôi chắc phải về nhà nghỉ ngơi thôi.",
                "file": null
            },
            {
                "value": "걱정했는데 정말 잘 됐네요.",
                "value_translation": "Tôi đã lo lắng nhưng thật may là mọi chuyện đã ổn.",
                "file": null
            },
            {
                "value": "분실물 센터에 연락해 보세요.",
                "value_translation": "Hãy thử liên lạc với trung tâm tìm đồ thất lạc xem.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 8. 다음을 듣고 이어질 수 있는 말로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 8. Nghe đoạn hội thoại sau và chọn câu trả lời phù hợp nhất cho lời nói tiếp theo.",
        "audio_file": "question_8.mp3",
        "explain": "(남) 오늘부터 수강 신청인데 다 했어? (여) 아니, 다른 일이 있어서 아직 못 했어.",
        "explain_translation": "(Nam) Việc đăng ký khóa học bắt đầu từ hôm nay. Bạn đã hoàn tất chưa? (Nữ) Chưa, tôi vẫn chưa làm xong vì tôi có việc khác phải làm.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "벌써 끝내다니 대단하네.",
                "value_translation": "Kết thúc sớm thế này thật tuyệt vời.",
                "file": null
            },
            {
                "value": "빨리 서두르는 게 좋을 거야.",
                "value_translation": "Tốt hơn là nên nhanh chóng khẩn trương lên.",
                "file": null
            },
            {
                "value": "내일부터 해 볼까 생각중이야.",
                "value_translation": "Tôi đang suy nghĩ xem có nên thử từ ngày mai không.",
                "file": null
            },
            {
                "value": "넌 성실하니까 다 잘 될 거야. ",
                "value_translation": "Vì bạn là người thành thật nên mọi chuyện sẽ ổn thôi.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 9. 다음을 듣고 여자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 9. Nghe đoạn hội thoại sau và chọn hành động tiếp theo phù hợp nhất của người phụ nữ.",
        "audio_file": "question_9.mp3",
        "explain": "9번. 이 안경으로 하고 싶은데 완성되려면 얼마나 걸릴까요? 지금 주문이 밀려 있어서 시간이 좀 걸릴 것 같습니다. 그럼 쇼핑을 하고 저녁 때 들르면 될까요? 네. 그전에 완성해 놓을 테니 다녀오세요.",
        "explain_translation": "Câu 9. Tôi muốn làm chiếc kính này, mất bao lâu thì xong ạ? / Hiện tại đơn hàng đang bị dồn lại nên chắc sẽ mất chút thời gian. / Vậy tôi đi mua sắm rồi quay lại vào buổi tối được không? / Vâng, tôi sẽ hoàn thành trước lúc đó, bạn cứ đi đi ạ.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "집으로 돌아간다.",
                "value_translation": "Quay về nhà.",
                "file": null
            },
            {
                "value": "쇼핑을 하러 간다.",
                "value_translation": "Đi mua sắm.",
                "file": null
            },
            {
                "value": "다시 안경을 고른다.",
                "value_translation": "Chọn lại kính.",
                "file": null
            },
            {
                "value": "안경을 찾으러 간다.",
                "value_translation": "Đi tìm kính.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 10. 다음을 듣고 여자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 10. Nghe đoạn hội thoại sau và chọn hành động tiếp theo phù hợp nhất của người phụ nữ.",
        "audio_file": "question_10.mp3",
        "explain": "남자: 어서 오세요. 무슨 약을 드릴까요?\r\n여자: 아침부터 머리가 계속 아파요.\r\n남자: 그럼 저쪽에 물이 있으니까 이 약을 지금 드시고 그래도 나아지지\r\n않으면 병원에 가 보세요.\r\n여자: 네, 알겠습니다.",
        "explain_translation": "Nam: Xin chào. Bạn cần thuốc gì ạ?\nNữ: Đầu tôi cứ đau suốt từ sáng đến giờ.\nNam: Vậy đằng kia có nước, bạn hãy uống thuốc này ngay bây giờ, nếu vẫn không đỡ thì hãy đi bệnh viện nhé.\nNữ: Vâng, tôi biết rồi.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "약을 먹는다.",
                "value_translation": "Uống thuốc.",
                "file": null
            },
            {
                "value": "가방을 찾으러 간다.",
                "value_translation": "Đi tìm túi xách.",
                "file": null
            },
            {
                "value": "물을 사러 간다.",
                "value_translation": "Đi mua nước.",
                "file": null
            },
            {
                "value": "가방 사진을 계속 찍는다.",
                "value_translation": "Tiếp tục chụp ảnh túi xách.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 11. 다음을 듣고 여자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 11. Nghe đoạn hội thoại sau và chọn hành động tiếp theo phù hợp nhất của người phụ nữ.",
        "audio_file": "question_11.mp3",
        "explain": "남자: 왜 가방 사진을 찍고 있어요?\r\n여자: 지금은 잘 들지 않는 가방인데 버리긴 아까우니까 중고 사이트에 싸게\r\n올려놓으려고요. 지난번에 안 입는 옷도 올렸더니 금방 팔렸거든요.\r\n남자: 그럼 나도 안 쓰는 가방이 있는데 찾아볼까요?\r\n여자: 그래요. 내가 사진을 찍어 줄 테니까 가지고 와요.",
        "explain_translation": "Nam: Tại sao bạn lại chụp ảnh túi xách vậy?\nNữ: Đây là cái túi tôi không hay dùng nữa, bỏ đi thì tiếc nên tôi định đăng bán rẻ trên trang đồ cũ. Lần trước tôi đăng mấy bộ quần áo không mặc nữa cũng bán được ngay đấy.\nNam: Vậy tôi cũng có cái túi không dùng đến, để tôi tìm thử xem nhé?\nNữ: Được thôi. Tôi sẽ chụp ảnh cho bạn nên hãy mang nó đến đây.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": "헌 옷을 버리러 간다.",
                "value_translation": "Đi vứt quần áo cũ.",
                "file": null
            },
            {
                "value": "가방을 찾으러 간다.",
                "value_translation": "Đi tìm túi xách.",
                "file": null
            },
            {
                "value": "안 입는 옷을 찾는다.",
                "value_translation": "Tìm quần áo không mặc nữa.",
                "file": null
            },
            {
                "value": "가방사진을 계속 찍는다.",
                "value_translation": "Tiếp tục chụp ảnh túi xách.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 12. 다음을 듣고 여자가 이어서 할 행동으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 12. Nghe đoạn hội thoại sau và chọn hành động tiếp theo phù hợp nhất của người phụ nữ.",
        "audio_file": "question_12.mp3",
        "explain": "여자: 여보세요? 저희 집 세탁기가 좀 이상해서 연락 드렸는데요.\r\n남자: 어디가 이상한지 말씀해 주시겠습니까?\r\n여자: 세탁기에 빨래를 넣고 돌리면 소리가 너무 크게 나고 많이 흔들려요.\r\n남자: 바닥의 균형이 맞지 않으면 많이 흔들리고 소리가 납니다. 우선 세탁기가\r\n잘 놓여 있는지 확인해 보시고 그래도 이상하면 다시 연락 주세요.",
        "explain_translation": "Nữ: Alo? Máy giặt nhà tôi có chút bất thường nên tôi liên lạc ạ.\nNam: Bạn có thể cho biết nó bất thường ở chỗ nào không ạ?\nNữ: Khi cho đồ vào giặt và cho máy chạy thì nó kêu rất to và rung lắc nhiều.\nNam: Nếu sàn không cân bằng thì máy sẽ rung nhiều và gây tiếng ồn. Trước tiên bạn hãy kiểm tra xem máy giặt đã được đặt đúng vị trí chưa, nếu vẫn còn bất thường thì hãy liên lạc lại sau nhé.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "세탁기를 고치러 간다.",
                "value_translation": "Đi sửa máy giặt.",
                "file": null
            },
            {
                "value": "세탁기 상태를 확인한다.",
                "value_translation": "Kiểm tra tình trạng máy giặt.",
                "file": null
            },
            {
                "value": "세탁기에 빨래를 넣는다",
                "value_translation": "Cho đồ vào máy giặt.",
                "file": null
            },
            {
                "value": "고객센터에 다시 전화한다.",
                "value_translation": "Gọi lại cho trung tâm khách hàng.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 13. 다음을 듣고 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 13. Nghe đoạn hội thoại sau và chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_13.mp3",
        "explain": "남자: (딩동댕) 관리실에서 안내 말씀드립니다. 내일은 우리 건물의 계단 청소\r\n가 있는 날입니다. 아침 10시부터 12시까지 진행할 예정이오니 각층 계\r\n단에 놓아두신 물건이나 자전거 등은 다른 장소로 이동해 주시기 바랍\r\n니다. 입주자 여러분들의 적극적인 협조를 부탁드립니다. 감사합니다.\r\n(딩동댕)",
        "explain_translation": "Nam: (Ding-dong-dang) Đây là thông báo từ ban quản lý. Ngày mai là ngày vệ sinh cầu thang của tòa nhà chúng ta. Dự kiến sẽ tiến hành từ 10 giờ sáng đến 12 giờ trưa, nên quý cư dân vui lòng di dời các đồ vật hoặc xe đạp để ở cầu thang các tầng sang nơi khác. Rất mong nhận được sự hợp tác tích cực của toàn thể cư dân. Xin cảm ơn. (Ding-dong-dang)",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": "오늘 오전에 건물 계단 청소를 실시한다.",
                "value_translation": "Thực hiện vệ sinh cầu thang tòa nhà vào sáng nay.",
                "file": null
            },
            {
                "value": "오전과 오후로 나누어 청소를 할 예정이다.",
                "value_translation": "Dự kiến sẽ chia việc vệ sinh thành buổi sáng và buổi chiều.",
                "file": null
            },
            {
                "value": "계단에 있는 자전거는 그대로 두어도 상관없다.",
                "value_translation": "Xe đạp ở cầu thang có để nguyên đó cũng không sao.",
                "file": null
            },
            {
                "value": "계단 청소에 걸리는 시간은 약 두 시간 정도이다.",
                "value_translation": "Thời gian vệ sinh cầu thang mất khoảng hai tiếng.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 14. 다음을 듣고 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 14. Nghe đoạn hội thoại sau và chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_14.mp3",
        "explain": "남자: 뭘 그렇게 열심히 만들고 있어요?\r\n여자: 비누를 만들고 있어요. 천연 재료로 만드니까 안심이 되잖아요. 그래서\r\n많이 만들어 놓고 오래 쓰려고요.\r\n남자: 많은 양을 한꺼번에 만드는 건 좋지 않아요. 집에서 만드는 건 아무래도\r\n보존 처리를 할 수 없기 때문에 오래 보관하면 변질의 우려가 있어요.\r\n여자: 아, 그래요? 저는 먹는 음식이 아니니까 오래 두어도 괜찮을 줄 알았어요.",
        "explain_translation": "Nam: Bạn đang chăm chỉ làm gì thế?\nNữ: Tôi đang làm xà phòng. Vì làm bằng nguyên liệu tự nhiên nên tôi thấy yên tâm hơn. Vì thế tôi định làm thật nhiều rồi dùng lâu dài.\nNam: Làm một lúc một lượng lớn thì không tốt đâu. Vì xà phòng tự làm ở nhà dù sao cũng không thể xử lý bảo quản được, nên nếu để lâu có thể bị biến chất đấy.\nNữ: À, thế ạ? Tôi cứ tưởng vì không phải là đồ ăn nên có thể để lâu được chứ.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "식품에 보존 처리를 하는 것은 좋지 않다.",
                "value_translation": "Việc xử lý bảo quản thực phẩm là không tốt.",
                "file": null
            },
            {
                "value": "비누는 조금씩 만들어 쓰는 것이 바람직하다.",
                "value_translation": "Tốt nhất là nên làm xà phòng với số lượng ít để dùng dần.",
                "file": null
            },
            {
                "value": "천연 비누는 상하지 않아 오래 사용할 수 있다.",
                "value_translation": "Xà phòng tự nhiên không bị hỏng nên có thể sử dụng lâu dài.",
                "file": null
            },
            {
                "value": "비누와 먹는 음식은 같이 만들어 쓰는 것이 좋다.",
                "value_translation": "Xà phòng và đồ ăn nên được làm cùng nhau thì tốt.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 15. 다음을 듣고 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 15. Nghe đoạn hội thoại sau và chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_15.mp3",
        "explain": "여자: 도로 상황을 전해드리겠습니다. 내일부터 시작되는 명절 연휴로 인해\r\n오늘 저녁 무렵부터 귀성객과 연휴 나들이 차량이 고속도로로 몰릴 것이\r\n예상됩니다. 현재 경부 고속도로 상황을 살펴보면 벌써부터 상하행선\r\n양쪽 차선에서 많은 차량들이 오다가다를 반복하고 있습니다. 따라서\r\n고속도로를 이용하려는 분들은 출발 시간대를 조정하시는 것이 좋겠습\r\n니다. 또한 국도 등의 다른 경로를 이용하는 것도 참고하시기 바랍니다.",
        "explain_translation": "Nữ: Tôi xin thông tin về tình hình đường sá. Do kỳ nghỉ lễ bắt đầu từ ngày mai, dự kiến từ chiều tối nay các phương tiện về quê và đi chơi lễ sẽ đổ dồn ra đường cao tốc. Nhìn vào tình hình đường cao tốc Gyeongbu hiện nay, nhiều phương tiện đã bắt đầu di chuyển chậm chạp lặp đi lặp lại ở cả hai làn đường lên xuống. Vì vậy, những ai có ý định sử dụng đường cao tốc nên điều chỉnh thời gian xuất phát. Ngoài ra, hãy tham khảo việc sử dụng các lộ trình khác như quốc lộ.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "연휴가 시작되는 오늘 저녁부터 차가 많이 몰릴 것이다.",
                "value_translation": "Xe sẽ đổ dồn về đông đúc từ tối nay khi kỳ nghỉ bắt đầu.",
                "file": null
            },
            {
                "value": "명절에 집으로 가려는 사람들로 인해 대중교통이 복잡하다.",
                "value_translation": "Phương tiện công cộng rất phức tạp do những người muốn về nhà dịp lễ.",
                "file": null
            },
            {
                "value": "명절 연휴에는 고속도로와 국도 모두 교통 정체가 일어난다.",
                "value_translation": "Tắc nghẽn giao thông xảy ra trên cả đường cao tốc và quốc lộ trong kỳ nghỉ lễ.",
                "file": null
            },
            {
                "value": "차량이 한꺼번에 몰리는 시간대를 피해서 출발하는 것이 좋다.",
                "value_translation": "Nên xuất phát tránh những khung giờ phương tiện tập trung đông cùng lúc.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 16. 다음을 듣고 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 16. Nghe đoạn hội thoại sau và chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_16.mp3",
        "explain": "저는 라면의 기름기 때문에 먹고 싶어도 망설여질 때가 많은데 저와 같은 사람들은 라면을 어떻게 먹으면 좋을까요? 보통 라면은 튀긴 면발로 인해 기름기가 많이 생기는데요. 물이 끓을 때 먼저 면을 잠깐 넣었다가 그 물을 버린 후에 새 물로 다시 끓여 드시면 좋습니다. 그리고 물이 끓으면 면보다 스프를 먼저 넣으세요. 그렇게 하면 면에 들어 있는 기름이 없어지고 깔끔한 국물을 즐기실 수 있습니다.",
        "explain_translation": "Tôi thường hay do dự dù rất muốn ăn mì tôm vì lượng dầu mỡ của nó, những người như tôi nên ăn mì như thế nào cho tốt ạ? / Thông thường mì tôm có nhiều dầu mỡ do sợi mì được chiên qua. Khi nước sôi, trước tiên bạn hãy cho mì vào trần sơ rồi đổ nước đó đi, sau đó nấu lại bằng nước mới. Ngoài ra, khi nước sôi, hãy cho gói súp vào trước khi cho mì. Làm như vậy sẽ giúp loại bỏ dầu trong sợi mì và bạn có thể thưởng thức nước dùng thanh đạm hơn.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "면을 끓는 물에넣고 오래두어야 기름기가 사라진다.",
                "value_translation": "Phải cho mì vào nước sôi và để lâu thì lớp dầu mới biến mất.",
                "file": null
            },
            {
                "value": "라면을 기름에 튀겨서 요리하면 맛있는 면을 즐길 수 있다.",
                "value_translation": "Nếu chiên mì ramen trong dầu rồi nấu thì có thể thưởng thức sợi mì ngon.",
                "file": null
            },
            {
                "value": "물이 끓으면 스프를 먼저 넣고 면을 넣어야 국물이 깔끔해진다.",
                "value_translation": "Khi nước sôi, phải cho gói gia vị vào trước rồi mới cho mì thì nước dùng mới trong.",
                "file": null
            },
            {
                "value": "라면을 끓이고 난 후 새 물을 더 추가해서 끓이는 것이 맛있다.",
                "value_translation": "Sau khi nấu ramen, thêm nước mới vào nấu tiếp sẽ ngon hơn.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 17. 다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 17. Nghe đoạn hội thoại sau và chọn ý chính phù hợp nhất của người đàn ông.",
        "audio_file": "question_17.mp3",
        "explain": "팔이 왜 그래요? 많이 다쳤어요? 빗길에 미끄러져 넘어지는 바람에 팔을 다쳐서 병원에 다녀오는 길이에요. 횡단보도를 건너려고 뛰다가 그만. 빗길에서는 보행 속도를 늦춰야 해요. 우산을 들고 있어 한쪽 손이 자유롭지 못하기 때문에 특히 주의가 필요해요. 비가 많이 내리는 여름철에 미끄러져 다치는 사고가 겨울철, 빙판길 사고만큼 많다는 통계도 있어요.",
        "explain_translation": "Tay bạn bị sao thế? Có bị thương nặng không? / Mình bị trượt chân ngã do đường mưa nên bị thương ở tay, đang trên đường từ bệnh viện về đây. Tại mình mải chạy để băng qua đường nên mới bị thế. / Khi đường mưa phải giảm tốc độ đi bộ lại. Vì một tay phải cầm ô nên không được tự do, cần phải đặc biệt chú ý. Có thống kê cho thấy số vụ tai nạn trượt ngã vào mùa hè mưa nhiều cũng đông như các vụ tai nạn trên đường đóng băng vào mùa đông vậy.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "빗길 사고를 예방하려면 걷는 속도를 줄이는 것이 좋다.",
                "value_translation": "Để phòng ngừa tai nạn đường trơn khi mưa, nên giảm tốc độ đi bộ.",
                "file": null
            },
            {
                "value": "겨울철 땅이 얼었을 때 골절 사고가 가장 많이 일어난다.",
                "value_translation": "Tai nạn gãy xương xảy ra nhiều nhất khi mặt đất đóng băng vào mùa đông.",
                "file": null
            },
            {
                "value": "횡단보도에서 천천히 걸으면 사고를 당할 위험성이 있다.",
                "value_translation": "Nếu đi bộ chậm trên vạch kẻ đường, có nguy cơ gặp tai nạn.",
                "file": null
            },
            {
                "value": "비가 내려도 넘어지지 않으려면 우산을 들지 않아야 한다.",
                "value_translation": "Để không bị ngã ngay cả khi trời mưa, không nên cầm ô.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 18. 다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 18. Nghe đoạn hội thoại sau và chọn ý chính phù hợp nhất của người đàn ông.",
        "audio_file": "question_18.mp3",
        "explain": "남자: 수지 씨, 저랑 봉사활동 같이 안 할래요? 작년부터 벽화 그리기 활동에\r\n참여하고 있는데 배울 점도 많고 보람도 있어요.\r\n여자: 저는 그림도 못 그리고 잘 하는 게 별로 없는데 괜찮아요?\r\n남자: 물론이에요. 옆에서 도와줄 사람도 필요하고 주변 청소도 있고 할 일은\r\n많아요. 봉사활동은 재능보다 진심을 가지고 어떤 일이든 해 보려는 적\r\n극적인 마음이 더 중요해요.",
        "explain_translation": "Nam: Suji này, bạn có muốn cùng tôi tham gia hoạt động tình nguyện không? Từ năm ngoái tôi đã tham gia hoạt động vẽ tranh tường, tôi học được nhiều điều và thấy rất ý nghĩa.\nNữ: Tôi không biết vẽ và cũng chẳng có gì giỏi cả, liệu có ổn không?\nNam: Dĩ nhiên rồi. Cần người giúp đỡ bên cạnh, dọn dẹp xung quanh, có rất nhiều việc phải làm. Hoạt động tình nguyện thì tấm lòng chân thành và tinh thần tích cực muốn thử sức với bất kỳ việc gì quan trọng hơn là tài năng.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "재능이 있으면 분야에 상관없이 도전할 수 있다.",
                "value_translation": "Nếu có tài năng thì có thể thử thách bản thân ở bất kỳ lĩnh vực nào.",
                "file": null
            },
            {
                "value": "봉사활동을 하려는 진정성과 적극적인 태도가 중요하다.",
                "value_translation": "Sự chân thành và thái độ tích cực khi làm tình nguyện là điều quan trọng.",
                "file": null
            },
            {
                "value": "벽화 그리기는 보람을 가장 크게 느낄 수 있는 활동이다.",
                "value_translation": "Vẽ tranh tường là hoạt động có thể cảm nhận được ý nghĩa lớn lao nhất.",
                "file": null
            },
            {
                "value": "남들이 하기 싫어하는 일을 하려면 도전 정신이 필요하다.",
                "value_translation": "Cần có tinh thần thử thách để làm những việc mà người khác không muốn làm.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 19. 다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 19. Nghe đoạn hội thoại sau và chọn ý chính phù hợp nhất của người đàn ông.",
        "audio_file": "question_19.mp3",
        "explain": "돈을 모으려면 어떻게 하는 것이 좋을까요? 돈을 모으고 싶다면 소비 습관부터 고쳐야 해요. 외식을 자주 하거나 식후에 꼭 커피를 마신다든지 야식을 배달시키는 것 등 불필요한 곳에 돈을 쓰는 건 아닌지 생각해 볼 필요가 있어요. 아, 그렇게 큰 지출이 아니더라도 자주 하면 큰 돈이 되겠군요. 저축할 돈이 없어서 못 한다는 말은 핑계에 지나지 않아요. 티끌 모아 태산이라는 말도 있잖아요.",
        "explain_translation": "Muốn tiết kiệm tiền thì nên làm thế nào ạ? / Nếu muốn tiết kiệm tiền, trước hết phải sửa thói quen tiêu dùng. Bạn cần suy nghĩ xem mình có đang tiêu tiền vào những việc không cần thiết như thường xuyên ăn ngoài, nhất định phải uống cà phê sau bữa ăn hay gọi đồ ăn đêm hay không. / À, ngay cả những khoản chi không lớn nhưng nếu làm thường xuyên thì sẽ trở thành một khoản tiền lớn nhỉ. / Nói rằng không có tiền để tiết kiệm chỉ là cái cớ thôi. Có câu 'Góp gió thành bão' (Kiến tha lâu đầy tổ) mà.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "무조건 돈을 쓰지 않아야 목돈을 마련할 수 있다.",
                "value_translation": "Phải tuyệt đối không tiêu tiền thì mới có thể tích lũy được một khoản tiền lớn.",
                "file": null
            },
            {
                "value": "외식을 하거나 야식 배달 등은 큰 지출이 아니다.",
                "value_translation": "Việc đi ăn ngoài hay đặt đồ ăn đêm không phải là khoản chi lớn.",
                "file": null
            },
            {
                "value": "저축을 하려면 불필요한 지출을 하지 말아야 한다.",
                "value_translation": "Để tiết kiệm thì không được chi tiêu cho những việc không cần thiết.",
                "file": null
            },
            {
                "value": "돈이 없어 저축을 할 수 없다는 말은 거짓이 아니다.",
                "value_translation": "Nói rằng không có tiền nên không thể tiết kiệm không phải là lời nói dối.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 20. 다음을 듣고 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 20. Nghe đoạn hội thoại sau và chọn ý chính phù hợp nhất của người đàn ông.",
        "audio_file": "question_20.mp3",
        "explain": "여자: 세계적인 온라인 쇼핑몰에서 한국의 농기구 호미가 돌풍을 일으키고 있다는데요. 외국인들이 호미를 많이 구입하는 이유가 뭐라고 생각하십니까?\r\n남자: 호미는 손으로 땅을 팔 때 사용하는 것으로 한국의 전통적인 농기구 중의 하나입니다. 서양에는 포크처럼 생긴 농기구나 삽 등은 있지만 호미와 같은 형태는 없습니다. 호미는 팔을 당겨서 사용하기 때문에 힘이덜 들고 편리해서 정원 가꾸기나 원예를 많이 하는 서양 사람들에게 인기가 높습니다. 편리한 물건은 동서양 상관없이 어디에서나 통하는 법이니까요.",
        "explain_translation": "Nữ: Nghe nói công cụ nông nghiệp 'Homi' của Hàn Quốc đang tạo nên một cơn sốt tại các trung tâm mua sắm trực tuyến thế giới. Bạn nghĩ lý do người nước ngoài mua Homi nhiều là gì?\nNam: Homi là một trong những công cụ nông nghiệp truyền thống của Hàn Quốc, được dùng để đào đất bằng tay. Ở phương Tây có các công cụ trông giống như dĩa hoặc xẻng nhưng không có hình dạng như Homi. Homi được sử dụng bằng cách kéo cánh tay nên đỡ tốn sức và tiện lợi, vì vậy nó rất được ưa chuộng bởi những người phương Tây hay làm vườn hoặc làm hoa cảnh. Những vật dụng tiện lợi thì dù là Đông hay Tây cũng đều được đón nhận như nhau mà.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "농사에 필요한 다양한 농기구가 한국에서만 생산된다.",
                "value_translation": "Nhiều loại nông cụ cần thiết cho nông nghiệp chỉ được sản xuất tại Hàn Quốc.",
                "file": null
            },
            {
                "value": "사용이 편리한 물건은 어디에서든 인정을 받기 마련이다.",
                "value_translation": "Những món đồ sử dụng tiện lợi chắc chắn sẽ được công nhận ở bất cứ đâu.",
                "file": null
            },
            {
                "value": "서양에 없는 기구들을 많이 만들어야 인기를 얻을 수 있다.",
                "value_translation": "Phải làm ra nhiều dụng cụ mà phương Tây không có thì mới có thể nhận được sự yêu thích.",
                "file": null
            },
            {
                "value": "한국의 농기구가 전 세계로 대량 수출되어 호평을 받고 있다.",
                "value_translation": "Các nông cụ của Hàn Quốc đang được xuất khẩu số lượng lớn ra toàn thế giới và nhận được phản hồi tốt.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 21. 다음을 듣고 물음에 답하십시오. 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 21. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn ý chính phù hợp nhất của người đàn ông.",
        "audio_file": "question_21.mp3",
        "explain": "여자: 이번 명절에 고향의 부모님께 선물을 사 드리고 싶은데 마땅한 게 떠오르지 않아서 고민이에요. 영수 씨 생각은 어때요?\r\n남자: 떨어져 계시는 부모님께 선물도 좋지만 자주 연락드리고 얼굴 보여 드리는 게 더 좋은 효도라고 생각해요.\r\n여자: 그래도 남들보다 비싸고 좋은 선물을 해 드리고 싶어요. 그래야 다른 사람들한테 자식 자랑도 하실 거 아니에요.\r\n남자: 남에게 보여 주는 게 무슨 의미가 있어요. 진심과 정성이 더 중요한 거지.",
        "explain_translation": "Nữ: Dịp lễ này tôi muốn mua quà tặng bố mẹ ở quê nhưng chưa nghĩ ra món gì phù hợp nên đang phân vân. Anh Yeong-su thấy sao?\nNam: Tặng quà cho bố mẹ ở xa cũng tốt, nhưng tôi nghĩ việc thường xuyên liên lạc và về thăm họ là đạo hiếu tốt hơn.\nNữ: Dù vậy, tôi vẫn muốn tặng món quà đắt tiền và tốt hơn những người khác. Có như thế bố mẹ mới có thể khoe con cái với người khác chứ.\nNam: Việc khoe với người khác thì có ý nghĩa gì đâu. Sự chân thành và lòng thành kính mới là quan trọng hơn.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "부모님 선물은 잘 고민해서 골라야 실패하지 않는다.",
                "value_translation": "Quà cho bố mẹ phải suy nghĩ kỹ rồi chọn mới không thất bại.",
                "file": null
            },
            {
                "value": "마음을 표현하려면 비싸더라도 선물을 종종 해야 한다.",
                "value_translation": "Để thể hiện tấm lòng, dù đắt tiền cũng nên thỉnh thoảng tặng quà.",
                "file": null
            },
            {
                "value": "값비싼 선물보다 안부를 자주 전하는 게 진정한 효도이다.",
                "value_translation": "Việc thường xuyên hỏi thăm là đạo hiếu thực sự hơn là những món quà đắt tiền.",
                "file": null
            },
            {
                "value": "부모님께 효도하려면 먼저 자랑스러운 사람이 되는 것이다.",
                "value_translation": "Để hiếu thảo với cha mẹ, trước hết phải trở thành người đáng tự hào.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 22. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 22. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_22.mp3",
        "explain": "여자: 이번 명절에 고향의 부모님께 선물을 사 드리고 싶은데 마땅한 게 떠오르지 않아서 고민이에요. 영수 씨 생각은 어때요?\r\n남자: 떨어져 계시는 부모님께 선물도 좋지만 자주 연락드리고 얼굴 보여 드리는 게 더 좋은 효도라고 생각해요.\r\n여자: 그래도 남들보다 비싸고 좋은 선물을 해 드리고 싶어요. 그래야 다른 사람들한테 자식 자랑도 하실 거 아니에요.\r\n남자: 남에게 보여 주는 게 무슨 의미가 있어요. 진심과 정성이 더 중요한 거지.",
        "explain_translation": "Nữ: Dịp lễ này tôi muốn mua quà tặng bố mẹ ở quê nhưng chưa nghĩ ra món gì phù hợp nên đang phân vân. Anh Yeong-su thấy sao?\nNam: Tặng quà cho bố mẹ ở xa cũng tốt, nhưng tôi nghĩ việc thường xuyên liên lạc và về thăm họ là đạo hiếu tốt hơn.\nNữ: Dù vậy, tôi vẫn muốn tặng món quà đắt tiền và tốt hơn những người khác. Có như thế bố mẹ mới có thể khoe con cái với người khác chứ.\nNam: Việc khoe với người khác thì có ý nghĩa gì đâu. Sự chân thành và lòng thành kính mới là quan trọng hơn.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": "여자는 부모님께 비싼 선물을 해 드렸다.",
                "value_translation": "Người phụ nữ đã tặng món quà đắt tiền cho bố mẹ.",
                "file": null
            },
            {
                "value": "여자는 부모님과 함께 고향에서 살고 있다.",
                "value_translation": "Người phụ nữ đang sống cùng bố mẹ ở quê.",
                "file": null
            },
            {
                "value": "여자의 부모님은 자식 자랑하는 걸 좋아하신다.",
                "value_translation": "Bố mẹ người phụ nữ thích khoe khoang về con cái.",
                "file": null
            },
            {
                "value": "남에게 보여 주기 위한 선물은 의미 없는 일이다.",
                "value_translation": "Quà tặng nhằm mục đích khoe với người khác là việc vô nghĩa.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 23. 다음을 듣고 물음에 답하십시오. 남자가 무엇을 하고 있는지 고르십시오.",
        "title_translation": "Câu 23. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn xem người đàn ông đang làm gì.",
        "audio_file": "question_23.mp3",
        "explain": "남자: 반려견에 왜 목줄을 안 채웠어요? 밖에 나올 때 목줄을 하지 않으면 개를 잃어버릴 위험도 있고 사람에게 피해를 입힐 수도 있잖아요.\r\n여자: 밖에서 자유롭게 뛸 수 있게 해 주고 싶어서 일부러 목줄을 채우지 않았어요. 우리 개는 순한 데다 저만 보고 따라오니까 괜찮을 것 같아서요.\r\n남자: 그렇지 않아요. 개들은 집에 있을 때와 달리 밖으로 나오면 돌발 행동을 할 수도 있어요. 산책길에서 미처 예상하지 못한 일이 일어나거나 안전 사고가 날 수 있기 때문에 모두를 위해 목줄은 꼭 해 주는 게 좋아요.\r\n여자: 제가 미처 생각을 못 했네요. 앞으로 꼭 목줄을 채울게요.",
        "explain_translation": "Nam: Tại sao bạn không xích cổ cho chó vậy? Khi ra ngoài nếu không xích cổ thì có nguy cơ lạc mất chó và cũng có thể gây hại cho người khác nữa.\nNữ: Vì tôi muốn nó được chạy nhảy tự do bên ngoài nên đã cố tình không xích cổ. Chó của tôi rất hiền, hơn nữa nó chỉ nhìn và đi theo tôi thôi nên tôi nghĩ chắc không sao.\nNam: Không phải vậy đâu. Chó khi ra ngoài có thể có những hành động đột phát khác hẳn với lúc ở nhà. Vì những việc không lường trước hoặc tai nạn an toàn có thể xảy ra trên đường đi dạo, nên tốt nhất là hãy xích cổ chó vì mọi người.\nNữ: Tôi đã không nghĩ đến điều đó. Từ nay tôi nhất định sẽ xích cổ nó.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "반려견으로부터 받은 피해 상황을 전달하고 있다.",
                "value_translation": "Đang truyền đạt tình huống thiệt hại nhận được từ chó nuôi.",
                "file": null
            },
            {
                "value": "운동할 때 지켜야 할 주의 사항을 역설하고 있다.",
                "value_translation": "Đang nhấn mạnh những lưu ý cần tuân thủ khi vận động.",
                "file": null
            },
            {
                "value": "반려 견과 산책 시 목줄의 필요성을 강조하고 있다.",
                "value_translation": "Đang nhấn mạnh sự cần thiết của việc xích cổ khi đi dạo cùng chó nuôi.",
                "file": null
            },
            {
                "value": "공공장소에서의 예절과 규칙에 대해 설명하고 있다.",
                "value_translation": "Đang giải thích về phép lịch sự và quy tắc ở nơi công cộng.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 24. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 24. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_24.mp3",
        "explain": "남자: 반려견에 왜 목줄을 안 채웠어요? 밖에 나올 때 목줄을 하지 않으면 개를 잃어버릴 위험도 있고 사람에게 피해를 입힐 수도 있잖아요.\r\n여자: 밖에서 자유롭게 뛸 수 있게 해 주고 싶어서 일부러 목줄을 채우지 않 았어요. 우리 개는 순한 데다 저만 보고 따라오니까 괜찮을 것 같아서요.\r\n남자: 그렇지 않아요. 개들은 집에 있을 때와 달리 밖으로 나오면 돌발 행동을 할 수도 있어요. 산책길에서 미처 예상하지 못한 일이 일어나거나 안전 사고가 날 수 있기 때문에 모두를 위해 목줄은 꼭 해 주는 게 좋아요.\r\n여자: 제가 미처 생각을 못 했네요. 앞으로 꼭 목줄을 채울게요.",
        "explain_translation": "Nam: Tại sao bạn không xích cổ cho chó vậy? Khi ra ngoài nếu không xích cổ thì có nguy cơ lạc mất chó và cũng có thể gây hại cho người khác nữa.\nNữ: Vì tôi muốn nó được chạy nhảy tự do bên ngoài nên đã cố tình không xích cổ. Chó của tôi rất hiền, hơn nữa nó chỉ nhìn và đi theo tôi thôi nên tôi nghĩ chắc không sao.\nNam: Không phải vậy đâu. Chó khi ra ngoài có thể có những hành động đột phát khác hẳn với lúc ở nhà. Vì những việc không lường trước hoặc tai nạn an toàn có thể xảy ra trên đường đi dạo, nên tốt nhất là hãy xích cổ chó vì mọi người.\nNữ: Tôi đã không nghĩ đến điều đó. Từ nay tôi nhất định sẽ xích cổ nó.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "집안에서도 반려견의 안전사고가 많이 일어나고 있다.",
                "value_translation": "Ngay cả trong nhà cũng đang xảy ra nhiều tai nạn an toàn cho chó nuôi.",
                "file": null
            },
            {
                "value": "주인이 옆에 있으면 반려견이 다른 곳으로 가지 않는다.",
                "value_translation": "Nếu chủ ở bên cạnh thì chó nuôi sẽ không đi nơi khác.",
                "file": null
            },
            {
                "value": "반려견이 밖에 나오면 집에서와 다르게 행동할 수 있다.",
                "value_translation": "Chó nuôi khi ra ngoài có thể hành động khác so với khi ở nhà.",
                "file": null
            },
            {
                "value": "반려견을 위해 자유롭게 뛰어놀 수 있는 장소가 필요하다.",
                "value_translation": "Cần một nơi có thể chạy nhảy tự do dành cho chó nuôi.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 25. 다음을 듣고 물음에 답하십시오. 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 25. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn ý chính phù hợp nhất của người đàn ông.",
        "audio_file": "question_25.mp3",
        "explain": "여자: 고속도로는 신호등도 없는데 왜 잘 달리다가 갑자기 차가 막히는 현상이 생기는 걸까요?\r\n남자: 보통 교통 체증이 일어나는 이유는 앞에서 도로 공사나 교통사고가 발생했을 때 그리고 도로가 갑자기 좁아지는 경우 일어납니다. 그러나 뚜렷한 이유도 없이 정체되는 현상을 유령 체증이라고 합니다. 앞에서 달리던 차가 차선을 바꾸거나 속도를 줄이게 되면 뒤쪽에 영향을 주게 되어 점차 교통체증이 일어나게 되는 것을 말합니다. 이런 현상을 방지하려면 불필요한 차선 변경이나 급정거를 자제해야 합니다. 또 차간 거리를 충분히 유지하고 스마트폰 사용이나 음식 섭취 같은 행동을 줄이는 등 기본적인 교통 상식만 잘 지켜도 교통 체증을 줄일 수 있습니다.",
        "explain_translation": "Nữ: Đường cao tốc không có đèn giao thông, tại sao đang chạy tốt lại đột nhiên xảy ra hiện tượng tắc xe nhỉ?\nNam: Thông thường lý do xảy ra ùn tắc giao thông là khi phía trước có công trình đường bộ hoặc tai nạn giao thông, và khi đường đột ngột bị hẹp lại. Tuy nhiên, hiện tượng tắc nghẽn mà không có lý do rõ ràng được gọi là 'tắc nghẽn ma'. Nghĩa là khi xe chạy phía trước chuyển làn hoặc giảm tốc độ, nó sẽ gây ảnh hưởng đến phía sau và dần dần dẫn đến ùn tắc giao thông. Để phòng tránh hiện tượng này, cần hạn chế việc chuyển làn không cần thiết hoặc phanh gấp. Ngoài ra, chỉ cần tuân thủ tốt các kiến thức giao thông cơ bản như duy trì đủ khoảng cách giữa các xe và giảm bớt các hành động như sử dụng điện thoại thông minh hay ăn uống thì cũng có thể giảm bớt ùn tắc giao thông.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "고속도로에도 신호등을 설치해야 교통 체증을 줄일 수 있다.",
                "value_translation": "Phải lắp đặt đèn giao thông cả trên đường cao tốc mới có thể giảm ùn tắc.",
                "file": null
            },
            {
                "value": "일반적인 교통 규칙만 잘 지켜도 정체 현상을 감소시킬 수 있다.",
                "value_translation": "Chỉ cần tuân thủ tốt các quy tắc giao thông thông thường cũng có thể làm giảm hiện tượng ùn tắc.",
                "file": null
            },
            {
                "value": "원인을 알 수 없는 교통 정체 현상이 운전자에게 공포감을 준다.",
                "value_translation": "Hiện tượng ùn tắc giao thông không rõ nguyên nhân gây ra cảm giác sợ hãi cho tài xế.",
                "file": null
            },
            {
                "value": "운전 중 휴대폰 사용이나 음식을 먹는 행동이 교통사고를 유발한다.",
                "value_translation": "Hành động sử dụng điện thoại hoặc ăn uống khi lái xe gây ra tai nạn giao thông.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 26. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 26. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_26.mp3",
        "explain": "여자: 고속도로는 신호등도 없는데 왜 잘 달리다가 갑자기 차가 막히는 현상이 생기는 걸까요?\r\n남자: 보통 교통 체증이 일어나는 이유는 앞에서 도로 공사나 교통사고가 발생했을 때 그리고 도로가 갑자기 좁아지는 경우 일어납니다. 그러나 뚜렷한 이유도 없이 정체되는 현상을 유령 체증이라고 합니다. 앞에서 달리던 차가 차선을 바꾸거나 속도를 줄이게 되면 뒤쪽에 영향을 주게 되어 점차 교통체증이 일어나게 되는 것을 말합니다. 이런 현상을 방지하려면 불필요한 차선 변경이나 급정거를 자제해야 합니다. 또 차간 거리를 충분히 유지하고 스마트폰 사용이나 음식 섭취 같은 행동을 줄이는 등 기본적인 교통 상식만 잘 지켜도 교통 체증을 줄일 수 있습니다.",
        "explain_translation": "Nữ: Đường cao tốc không có đèn giao thông, tại sao đang chạy tốt lại đột nhiên xảy ra hiện tượng tắc xe nhỉ?\nNam: Thông thường lý do xảy ra ùn tắc giao thông là khi phía trước có công trình đường bộ hoặc tai nạn giao thông, và khi đường đột ngột bị hẹp lại. Tuy nhiên, hiện tượng tắc nghẽn mà không có lý do rõ ràng được gọi là 'tắc nghẽn ma'. Nghĩa là khi xe chạy phía trước chuyển làn hoặc giảm tốc độ, nó sẽ gây ảnh hưởng đến phía sau và dần dần dẫn đến ùn tắc giao thông. Để phòng tránh hiện tượng này, cần hạn chế việc chuyển làn không cần thiết hoặc phanh gấp. Ngoài ra, chỉ cần tuân thủ tốt các kiến thức giao thông cơ bản như duy trì đủ khoảng cách giữa các xe và giảm bớt các hành động như sử dụng điện thoại thông minh hay ăn uống thì cũng có thể giảm bớt ùn tắc giao thông.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "갑자기 차선이 줄어들면 교통 정체가 생기게 된다.",
                "value_translation": "Nếu làn đường đột ngột giảm đi thì sẽ xảy ra ùn tắc giao thông.",
                "file": null
            },
            {
                "value": "아무 이유 없이 차가 막히는 현상은 유령 때문이다.",
                "value_translation": "Hiện tượng xe tắc mà không có lý do là do ma.",
                "file": null
            },
            {
                "value": "앞에서 속도를 줄이면 뒤의 차들이 달리기 시작한다.",
                "value_translation": "Nếu phía trước giảm tốc độ thì các xe phía sau bắt đầu chạy.",
                "file": null
            },
            {
                "value": "차간 거리를 넓히는 것이 교통사고를 줄이는 방법이다.",
                "value_translation": "Nới rộng khoảng cách giữa các xe là phương pháp giảm tai nạn giao thông.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 27. 다음을 듣고 물음에 답하십시오. 남자가 말하는 의도로 알맞은 것을 고르십시오.",
        "title_translation": "Câu 27. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn ý đồ của người đàn ông khi nói.",
        "audio_file": "question_27.mp3",
        "explain": "여자: 가을이라 밤에 달빛이 더 아름다운 거 같지 않아요? 덥지도 춥지도 않은 계절이니 밖에서 달을 구경하면 정말 좋겠어요. \r\n남자: 그럼 말 나온 김에 이번 주말 창덕궁 달빛 기행에 신청해 볼까요? 이번에는 궁중 문화 축제도 함께 열린다니까 볼만 할 거예요.\r\n여자: 오, 그래요? 궁에서 그런 행사를 한다니 진짜 멋지겠네요.\r\n남자: 특히 예년과 달리 반달 모양의 연못으로 유명한 반월지가 달빛 탐방 구역으로 추가되었다는데 거기서 달도 보며 우리의 전통 문화를 제대로느껴볼 수 있는 좋은 기회가 될 것 같아요. 그럼 바로 신청할게요.",
        "explain_translation": "Nữ: Mùa thu nên ánh trăng ban đêm có vẻ đẹp hơn nhỉ? Vì là mùa không nóng cũng không lạnh nên nếu ngắm trăng ở ngoài trời thì thật tuyệt.\nNam: Vậy nhân tiện nói chuyện này, cuối tuần này chúng ta đăng ký tham gia 'Hành trình Ánh trăng Xương Đức Cung' nhé? Nghe nói lần này cũng diễn ra lễ hội văn hóa cung đình nên sẽ rất đáng xem đấy.\nNữ: Ồ, vậy sao? Thật tuyệt vời nếu có sự kiện như vậy ở cung điện.\nNam: Đặc biệt, khác với mọi năm, hồ Banwolji nổi tiếng với hình dáng nửa vầng trăng đã được thêm vào khu vực tham quan ánh trăng, nên tôi nghĩ đây sẽ là cơ hội tốt để vừa ngắm trăng vừa cảm nhận đúng nghĩa văn hóa truyền thống của chúng ta. Vậy tôi sẽ đăng ký ngay nhé.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "달구경에 알맞은 최적의 장소를 추천하기 위해",
                "value_translation": "Để gợi ý địa điểm tối ưu phù hợp cho việc ngắm trăng.",
                "file": null
            },
            {
                "value": "궁궐의 아름다운 전통 건축물을 소개하기 위해",
                "value_translation": "Để giới thiệu những kiến trúc truyền thống đẹp đẽ của cung điện.",
                "file": null
            },
            {
                "value": "궁중 문화의 특별함과 우수함을 강조하기 위해",
                "value_translation": "Để nhấn mạnh sự đặc biệt và ưu việt của văn hóa cung đình.",
                "file": null
            },
            {
                "value": "달빛 기행 신청이 어려운 이유를 확인하기 위해",
                "value_translation": "Để xác nhận lý do tại sao việc đăng ký hành trình ánh trăng lại khó khăn.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 28. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 28. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_28.mp3",
        "explain": "여자: 가을이라 밤에 달빛이 더 아름다운 거 같지 않아요? 덥지도 춥지도 않은 계절이니 밖에서 달을 구경하면 정말 좋겠어요. \r\n남자: 그럼 말 나온 김에 이번 주말 창덕궁 달빛 기행에 신청해 볼까요? 이번에는 궁중 문화 축제도 함께 열린다니까 볼만 할 거예요.\r\n여자: 오, 그래요? 궁에서 그런 행사를 한다니 진짜 멋지겠네요.\r\n남자: 특히 예년과 달리 반달 모양의 연못으로 유명한 반월지가 달빛 탐방 구역으로 추가되었다는데 거기서 달도 보며 우리의 전통 문화를 제대로느껴볼 수 있는 좋은 기회가 될 것 같아요. 그럼 바로 신청할게요.",
        "explain_translation": "Nữ: Mùa thu nên ánh trăng ban đêm có vẻ đẹp hơn nhỉ? Vì là mùa không nóng cũng không lạnh nên nếu ngắm trăng ở ngoài trời thì thật tuyệt.\nNam: Vậy nhân tiện nói chuyện này, cuối tuần này chúng ta đăng ký tham gia 'Hành trình Ánh trăng Xương Đức Cung' nhé? Nghe nói lần này cũng diễn ra lễ hội văn hóa cung đình nên sẽ rất đáng xem đấy.\nNữ: Ồ, vậy sao? Thật tuyệt vời nếu có sự kiện như vậy ở cung điện.\nNam: Đặc biệt, khác với mọi năm, hồ Banwolji nổi tiếng với hình dáng nửa vầng trăng đã được thêm vào khu vực tham quan ánh trăng, nên tôi nghĩ đây sẽ là cơ hội tốt để vừa ngắm trăng vừa cảm nhận đúng nghĩa văn hóa truyền thống của chúng ta. Vậy tôi sẽ đăng ký ngay nhé.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "궁중 문화 축제는 신청하지 않아도 입장이 가능하다.",
                "value_translation": "Lễ hội văn hóa cung đình có thể vào cửa mà không cần đăng ký.",
                "file": null
            },
            {
                "value": "누구에게나 무료로 개방된 장소에서 달을 볼 수 있다.",
                "value_translation": "Có thể ngắm trăng ở địa điểm mở cửa miễn phí cho bất kỳ ai.",
                "file": null
            },
            {
                "value": "이번에 새롭게 달빛 탐방 구역 추가로 구경거리가 늘었다.",
                "value_translation": "Lần này số lượng thứ để xem đã tăng lên nhờ việc thêm khu vực tham quan ánh trăng mới.",
                "file": null
            },
            {
                "value": "창덕궁에서는 매일 궁중 문화 체험의 기회를 만날 수 있다.",
                "value_translation": "Ở Xương Đức Cung, có thể gặp gỡ cơ hội trải nghiệm văn hóa cung đình mỗi ngày.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 29. 다음을 듣고 물음에 답하십시오. 남자가 누구인지 고르십시오.",
        "title_translation": "Câu 29. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn người đàn ông là ai.",
        "audio_file": "question_29.mp3",
        "explain": "여자: 서울숲은 서울 시민들의 휴식 공간이자 어린이들의 생태 학습장으로 인기가 높은데요. 다른 숲과 비교해서 어떤 특징을 가지고 있습니까?\r\n남자: 이곳 서울숲은 한강과 맞닿아 있어 예전 뚝섬유원지로 골프장, 경마장,체육공원 등으로 활용되던 곳인데 서울 시민들에게 환경친화적 생태 공원으로 거듭나게 되었지요. 특히 뚝섬 생태숲은 과거 한강물이 흘렀던 곳을 자연 생태 공원으로 조성하여 야생 동물을 관찰할 수 있도록 했기때문에 아이들에게도 훌륭한 자연 학습장이 되고 있습니다. 서울과 같은 대도시의 아이들이 자연을 배우고 마음껏 뛰어놀 수 있는 울창한 숲이 있다는 건 매우 다행스런 일입니다. 저 역시 아이들에게 숲을 설명해주고 자연과 가깝게 만드는 제 일에 큰 보람을 느끼고 있습니다.",
        "explain_translation": "Nữ: Rừng Seoul rất được yêu thích như là không gian nghỉ ngơi của người dân Seoul và là nơi học tập sinh thái của trẻ em. So với những khu rừng khác, nó có đặc điểm gì ạ?\nNam: Rừng Seoul này nằm giáp sông Hàn, trước đây là khu vui chơi Ttukseom từng được sử dụng làm sân golf, trường đua ngựa, công viên thể thao, v.v., nay đã được tái sinh thành công viên sinh thái thân thiện với môi trường dành cho người dân Seoul. Đặc biệt, rừng sinh thái Ttukseom được tạo ra như một công viên sinh thái tự nhiên tại nơi nước sông Hàn từng chảy qua để có thể quan sát động vật hoang dã, vì vậy nó đang trở thành một nơi học tập tự nhiên tuyệt vời cho trẻ em. Thật là một điều may mắn khi có một khu rừng rậm rạp nơi trẻ em ở các thành phố lớn như Seoul có thể học hỏi về tự nhiên và chạy nhảy thỏa thích. Bản thân tôi cũng cảm thấy rất ý nghĩa với công việc giải thích về rừng cho trẻ em và giúp chúng gần gũi hơn với tự nhiên.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "숲 해설가",
                "value_translation": "Người thuyết minh về rừng.",
                "file": null
            },
            {
                "value": "관광 안내원",
                "value_translation": "Hướng dẫn viên du lịch.",
                "file": null
            },
            {
                "value": "역사 선생님",
                "value_translation": "Giáo viên lịch sử.",
                "file": null
            },
            {
                "value": "동물원 관계자",
                "value_translation": "Nhân viên vườn thú.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 30. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 30. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_30.mp3",
        "explain": "여자: 서울숲은 서울 시민들의 휴식 공간이자 어린이들의 생태 학습장으로 인기가 높은데요. 다른 숲과 비교해서 어떤 특징을 가지고 있습니까?\r\n남자: 이곳 서울숲은 한강과 맞닿아 있어 예전 뚝섬유원지로 골프장, 경마장,체육공원 등으로 활용되던 곳인데 서울 시민들에게 환경친화적 생태 공원으로 거듭나게 되었지요. 특히 뚝섬 생태숲은 과거 한강물이 흘렀던 곳을 자연 생태 공원으로 조성하여 야생 동물을 관찰할 수 있도록 했기때문에 아이들에게도 훌륭한 자연 학습장이 되고 있습니다. 서울과 같은 대도시의 아이들이 자연을 배우고 마음껏 뛰어놀 수 있는 울창한 숲이 있다는 건 매우 다행스런 일입니다. 저 역시 아이들에게 숲을 설명해주고 자연과 가깝게 만드는 제 일에 큰 보람을 느끼고 있습니다.",
        "explain_translation": "Nữ: Rừng Seoul rất được yêu thích như là không gian nghỉ ngơi của người dân Seoul và là nơi học tập sinh thái của trẻ em. So với những khu rừng khác, nó có đặc điểm gì ạ?\nNam: Rừng Seoul này nằm giáp sông Hàn, trước đây là khu vui chơi Ttukseom từng được sử dụng làm sân golf, trường đua ngựa, công viên thể thao, v.v., nay đã được tái sinh thành công viên sinh thái thân thiện với môi trường dành cho người dân Seoul. Đặc biệt, rừng sinh thái Ttukseom được tạo ra như một công viên sinh thái tự nhiên tại nơi nước sông Hàn từng chảy qua để có thể quan sát động vật hoang dã, vì vậy nó đang trở thành một nơi học tập tự nhiên tuyệt vời cho trẻ em. Thật là một điều may mắn khi có một khu rừng rậm rạp nơi trẻ em ở các thành phố lớn như Seoul có thể học hỏi về tự nhiên và chạy nhảy thỏa thích. Bản thân tôi cũng cảm thấy rất ý nghĩa với công việc giải thích về rừng cho trẻ em và giúp chúng gần gũi hơn với tự nhiên.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "한강과 떨어져 있는 숲에 야생 동물이 자라고 있다.",
                "value_translation": "Động vật hoang dã đang lớn lên ở khu rừng cách xa sông Hàn.",
                "file": null
            },
            {
                "value": "서울 시민을 위한 휴식 공간이 상당히 부족한 실정이다.",
                "value_translation": "Thực tế là không gian nghỉ ngơi dành cho người dân Seoul đang khá thiếu thốn.",
                "file": null
            },
            {
                "value": "자연을 배우고 체험할 수 있는 친환경 공원이 조성되었다.",
                "value_translation": "Công viên thân thiện với môi trường nơi có thể học hỏi và trải nghiệm tự nhiên đã được tạo ra.",
                "file": null
            },
            {
                "value": "서울숲은 경마장과 골프장 등 체육공원으로 이루어져 있다.",
                "value_translation": "Rừng Seoul bao gồm các công viên thể thao như trường đua ngựa và sân golf.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 31. 다음을 듣고 물음에 답하십시오. 남자의 중심 생각으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 31. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn ý chính phù hợp nhất của người đàn ông.",
        "audio_file": "question_31.mp3",
        "explain": "여자: 요즘 취업이 어렵다고 하는데 왜 입사 후 1년 미만인 사람들의 이직률은 가장 높게 나타나고 있는 걸까요? 다른 회사에 경력직으로 들어가려면 최소 2년 이상 근무 경험이 있어야 하는데 말이에요.\r\n남자: 각자의 상황이 다르겠지만 입사한 지 1년도 안 되어 이직을 생각하는 경우는 그동안 취업이 급해서 눈높이를 낮춰 지원을 했다가 막상 다녀 보니 자신과 맞지 않아 그런 게 아닐까 싶어요.\r\n여자: 그럴 수 있겠네요. 급한 마음에 어디든 빨리 취직을 하기 위해 적성이나 기타 조건을 따지지 않고 들어갔다가 실망을 하게 되는 거군요.\r\n남자: 점점 고학력의 청년 구직자들이 증가하는 현상을 보면 양질의 일자리\r\n공급이 부족한 현재 고용 현실을 반영하고 있는 것 같아 씁쓸하네요.",
        "explain_translation": "Nữ: Dạo này nghe nói việc tìm việc làm rất khó khăn, nhưng tại sao tỷ lệ chuyển việc của những người làm việc chưa đầy 1 năm sau khi vào công ty lại cao nhất nhỉ? Để vào công ty khác với tư cách là nhân viên có kinh nghiệm thì phải có ít nhất 2 năm kinh nghiệm làm việc cơ mà.\nNam: Mỗi người có một tình huống khác nhau, nhưng tôi nghĩ trường hợp nghĩ đến việc chuyển việc khi vào công ty chưa đầy 1 năm có lẽ là do thời gian qua việc tìm việc quá gấp gáp nên đã hạ thấp tiêu chuẩn để ứng tuyển, đến khi đi làm thực tế thấy không phù hợp với bản thân nên mới như vậy.\nNữ: Có thể là vậy. Vì nôn nóng muốn nhanh chóng có việc ở bất cứ đâu nên đã vào làm mà không tính đến sở trường hay các điều kiện khác, để rồi thất vọng.\nNam: Nhìn hiện tượng những người tìm việc trẻ tuổi có học vấn cao ngày càng tăng, có vẻ như nó đang phản ánh thực tế tuyển dụng hiện nay là thiếu nguồn cung việc làm chất lượng tốt, thật chua xót.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "성급하게 취직을 하게 되면 이직의 사유가 될 수도 있다.",
                "value_translation": "Nếu vội vàng tìm việc thì có thể trở thành lý do để chuyển việc.",
                "file": null
            },
            {
                "value": "자신의 적성에 안 맞더라도 일단 취업을 하는 게 유리하다.",
                "value_translation": "Ngay cả khi không phù hợp với sở trường của mình, việc có việc làm trước mắt vẫn có lợi.",
                "file": null
            },
            {
                "value": "청년 구직자들은 자신의 일에 만족하지 못하는 경우가 많다.",
                "value_translation": "Những người tìm việc trẻ tuổi thường không hài lòng với công việc của mình.",
                "file": null
            },
            {
                "value": "다른 회사로 이직을 하기 위해서는 2년 이상 경력이 필요하다.",
                "value_translation": "Để chuyển sang công ty khác, cần có kinh nghiệm từ 2 năm trở lên.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 32. 남자의 태도로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 32. Chọn thái độ phù hợp nhất của người đàn ông.",
        "audio_file": "question_32.mp3",
        "explain": "여자: 요즘 취업이 어렵다고 하는데 왜 입사 후 1년 미만인 사람들의 이직률은 가장 높게 나타나고 있는 걸까요? 다른 회사에 경력직으로 들어가려면 최소 2년 이상 근무 경험이 있어야 하는데 말이에요.\r\n남자: 각자의 상황이 다르겠지만 입사한 지 1년도 안 되어 이직을 생각하는 경우는 그동안 취업이 급해서 눈높이를 낮춰 지원을 했다가 막상 다녀 보니 자신과 맞지 않아 그런 게 아닐까 싶어요.\r\n여자: 그럴 수 있겠네요. 급한 마음에 어디든 빨리 취직을 하기 위해 적성이나 기타 조건을 따지지 않고 들어갔다가 실망을 하게 되는 거군요.\r\n남자: 점점 고학력의 청년 구직자들이 증가하는 현상을 보면 양질의 일자리\r\n공급이 부족한 현재 고용 현실을 반영하고 있는 것 같아 씁쓸하네요.",
        "explain_translation": "Nữ: Dạo này nghe nói việc tìm việc làm rất khó khăn, nhưng tại sao tỷ lệ chuyển việc của những người làm việc chưa đầy 1 năm sau khi vào công ty lại cao nhất nhỉ? Để vào công ty khác với tư cách là nhân viên có kinh nghiệm thì phải có ít nhất 2 năm kinh nghiệm làm việc cơ mà.\nNam: Mỗi người có một tình huống khác nhau, nhưng tôi nghĩ trường hợp nghĩ đến việc chuyển việc khi vào công ty chưa đầy 1 năm có lẽ là do thời gian qua việc tìm việc quá gấp gáp nên đã hạ thấp tiêu chuẩn để ứng tuyển, đến khi đi làm thực tế thấy không phù hợp với bản thân nên mới như vậy.\nNữ: Có thể là vậy. Vì nôn nóng muốn nhanh chóng có việc ở bất cứ đâu nên đã vào làm mà không tính đến sở trường hay các điều kiện khác, để rồi thất vọng.\nNam: Nhìn hiện tượng những người tìm việc trẻ tuổi có học vấn cao ngày càng tăng, có vẻ như nó đang phản ánh thực tế tuyển dụng hiện nay là thiếu nguồn cung việc làm chất lượng tốt, thật chua xót.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "정부의 청년 대상 일자리 대책에 대해 분석하고 있다.",
                "value_translation": "Đang phân tích về chính sách việc làm dành cho thanh niên của chính phủ.",
                "file": null
            },
            {
                "value": "잦은 이직의 이유에 대한 여자의 의견을 반박하고 있다.",
                "value_translation": "Đang bác bỏ ý kiến của người phụ nữ về lý do chuyển việc thường xuyên.",
                "file": null
            },
            {
                "value": "공급과 수요가 맞지 않는 고용 현실을 안타까워하고 있다.",
                "value_translation": "Đang cảm thấy tiếc nuối cho thực tế tuyển dụng nơi cung và cầu không khớp nhau.",
                "file": null
            },
            {
                "value": "적성과 조건만 따지는 청년 구직자들의 태도를 비판하고 있다.",
                "value_translation": "Đang phê phán thái độ của những người tìm việc trẻ tuổi chỉ tính toán đến sở trường và điều kiện.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 33. 다음을 듣고 물음에 답하십시오. 무엇에 대한 내용인지 알맞은 것을 고르십시오.",
        "title_translation": "Câu 33. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn nội dung phù hợp về những gì đang được nói đến.",
        "audio_file": "question_33.mp3",
        "explain": "남자: 최근 몇 년간 1인 가구의 증가 현상이 눈에 띄게 나타나고 있습니다.이는 바쁜 현대인의 삶과 개인주의 심화 등으로 인해 홀로 살아가는 사람들이 늘어난 것입니다. 1인 가구에서 노년 독거 가구가 많은 부분을 차지하고 있긴 하지만 학업이나 직장 등의 이유로 가족과 떨어져 살아가는 젊은 층도 많습니다. 이들은 대부분 집에서 요리를 하기 보다는외식이나 간편식으로 끼니를 해결하는 경우가 많습니다. 또한 1인 문화,즉 혼자 즐기는 문화를 형성하고 있는데 이를 반영한 혼밥, 혼술, 혼행이라는 신조어가 생겨났습니다. 혼자 밥을 먹고, 혼자 술을 마시고 혼자 여행을 한다는 의미입니다. 이들을 대상으로 하는 1인 식당, 1인 카페등도 점차 늘어나는 추세입니다.",
        "explain_translation": "Nam: Trong vài năm gần đây, hiện tượng gia tăng hộ gia đình 1 người đang xuất hiện rõ rệt. Đây là sự gia tăng của những người sống một mình do cuộc sống bận rộn của con người hiện đại và sự gia tăng của chủ nghĩa cá nhân. Mặc dù các hộ gia đình cao tuổi sống độc thân chiếm một phần lớn trong các hộ gia đình 1 người, nhưng cũng có nhiều người trẻ sống xa gia đình vì lý do học tập hoặc công việc. Phần lớn họ thường giải quyết bữa ăn bằng việc ăn ngoài hoặc đồ ăn tiện lợi thay vì nấu ăn tại nhà. Ngoài ra, họ đang hình thành văn hóa 1 người, tức là văn hóa tận hưởng một mình, và các từ mới như hon-bap (ăn một mình), hon-sul (uống một mình), hon-haeng (du lịch một mình) đã ra đời để phản ánh điều này. Nó có nghĩa là ăn cơm một mình, uống rượu một mình và đi du lịch một mình. Các nhà hàng 1 người, quán cà phê 1 người dành cho họ cũng đang có xu hướng dần tăng lên.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": "1인 가구의 식생활 변화",
                "value_translation": "Sự thay đổi trong thói quen ăn uống của hộ gia đình 1 người.",
                "file": null
            },
            {
                "value": "노년층 독거 가구의 증가 원인",
                "value_translation": "Nguyên nhân gia tăng hộ gia đình cao tuổi sống độc thân.",
                "file": null
            },
            {
                "value": "혼자 즐기는 취미 생활의 다양화",
                "value_translation": "Sự đa dạng hóa của các sở thích cá nhân tận hưởng một mình.",
                "file": null
            },
            {
                "value": "1인 가구 증가에 따른 문화 현상",
                "value_translation": "Hiện tượng văn hóa theo sau sự gia tăng của hộ gia đình 1 người.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 34. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 34. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_34.mp3",
        "explain": "남자: 최근 몇 년간 1인 가구의 증가 현상이 눈에 띄게 나타나고 있습니다.이는 바쁜 현대인의 삶과 개인주의 심화 등으로 인해 홀로 살아가는 사람들이 늘어난 것입니다. 1인 가구에서 노년 독거 가구가 많은 부분을 차지하고 있긴 하지만 학업이나 직장 등의 이유로 가족과 떨어져 살아가는 젊은 층도 많습니다. 이들은 대부분 집에서 요리를 하기 보다는외식이나 간편식으로 끼니를 해결하는 경우가 많습니다. 또한 1인 문화,즉 혼자 즐기는 문화를 형성하고 있는데 이를 반영한 혼밥, 혼술, 혼행이라는 신조어가 생겨났습니다. 혼자 밥을 먹고, 혼자 술을 마시고 혼자 여행을 한다는 의미입니다. 이들을 대상으로 하는 1인 식당, 1인 카페등도 점차 늘어나는 추세입니다.",
        "explain_translation": "Nam: Trong vài năm gần đây, hiện tượng gia tăng hộ gia đình 1 người đang xuất hiện rõ rệt. Đây là sự gia tăng của những người sống một mình do cuộc sống bận rộn của con người hiện đại và sự gia tăng của chủ nghĩa cá nhân. Mặc dù các hộ gia đình cao tuổi sống độc thân chiếm một phần lớn trong các hộ gia đình 1 người, nhưng cũng có nhiều người trẻ sống xa gia đình vì lý do học tập hoặc công việc. Phần lớn họ thường giải quyết bữa ăn bằng việc ăn ngoài hoặc đồ ăn tiện lợi thay vì nấu ăn tại nhà. Ngoài ra, họ đang hình thành văn hóa 1 người, tức là văn hóa tận hưởng một mình, và các từ mới như hon-bap (ăn một mình), hon-sul (uống một mình), hon-haeng (du lịch một mình) đã ra đời để phản ánh điều này. Nó có nghĩa là ăn cơm một mình, uống rượu một mình và đi du lịch một mình. Các nhà hàng 1 người, quán cà phê 1 người dành cho họ cũng đang có xu hướng dần tăng lên.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "혼자 사는 청년 세대가 점점 증가하고 있다.",
                "value_translation": "Thế hệ trẻ sống một mình đang dần gia tăng.",
                "file": null
            },
            {
                "value": "1인 가구의 대부분은 집에서 요리를 해 먹는다.",
                "value_translation": "Phần lớn các hộ gia đình 1 người tự nấu ăn tại nhà.",
                "file": null
            },
            {
                "value": "편하게 혼자 식사할 수 있는 식당을 찾기 어렵다.",
                "value_translation": "Khó có thể tìm thấy nhà hàng nơi có thể thoải mái dùng bữa một mình.",
                "file": null
            },
            {
                "value": "1인 가구의 증가 현상은 이미 오래전부터 시작되었다.",
                "value_translation": "Hiện tượng gia tăng hộ gia đình 1 người đã bắt đầu từ rất lâu rồi.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 35. 다음을 듣고 물음에 답하십시오. 남자가 무엇을 하고 있는지 고르십시오.",
        "title_translation": "Câu 35. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn xem người đàn ông đang làm gì.",
        "audio_file": "question_35.mp3",
        "explain": "남자: 이번에 발사된 천리안 위성 2호는 지구와 우주의 기상 관측을 목적으로 2010년에 발사된 1호에 이어 한반도를 포함한 동북아시아 주변의 해양과 대기 환경을 관측을 목적으로 설계된 위성입니다. 천리안은 천 리, 즉멀리 볼 수 있는 눈이라는 의미를 가지고 있듯이 이 위성에서 촬영된 영상을 바탕으로 해양 쓰레기의 분포나 이동 경로, 적조 현상 등의 다양한 해상 정보를 파악하게 됩니다. 또한 해양에서 발생하는 미세 먼지와 오염 물질 탐지 등의 위성 정보를 제공하게 될 것입니다.",
        "explain_translation": "Nam: Vệ tinh Cheollian 2 vừa được phóng lần này là vệ tinh được thiết kế nhằm mục đích quan sát môi trường đại dương và khí quyển xung quanh Đông Bắc Á bao gồm cả bán đảo Triều Tiên, tiếp nối vệ tinh số 1 được phóng vào năm 2010 với mục đích quan sát khí tượng trái đất và vũ trụ. Giống như ý nghĩa của cái tên Cheollian là đôi mắt có thể nhìn xa ngàn dặm, dựa trên những hình ảnh chụp được từ vệ tinh này, chúng ta sẽ nắm bắt được nhiều thông tin hàng hải đa dạng như sự phân bố và lộ trình di chuyển của rác thải biển, hiện tượng thủy triều đỏ. Ngoài ra, nó cũng sẽ cung cấp các thông tin vệ tinh như phát hiện bụi mịn và các chất gây ô nhiễm phát sinh từ biển.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "해양에서 발생되는 오염 물질의 심각성을 파악하고 있다.",
                "value_translation": "Đang nắm bắt mức độ nghiêm trọng của các chất gây ô nhiễm phát sinh từ đại dương.",
                "file": null
            },
            {
                "value": "기상 관측에 필요한 위성 발사의 필요성을 강조하고 있다.",
                "value_translation": "Đang nhấn mạnh sự cần thiết của việc phóng vệ tinh cần thiết cho quan sát khí tượng.",
                "file": null
            },
            {
                "value": "관측 위성 1호와 2호의 목적과 역할에 대해 설명하고 있다.",
                "value_translation": "Đang giải thích về mục đích và vai trò của vệ tinh quan sát số 1 và số 2.",
                "file": null
            },
            {
                "value": "위성 촬영 영상을 바탕으로 많은 해양 정보를 분석하고 있다.",
                "value_translation": "Đang phân tích nhiều thông tin hàng hải dựa trên hình ảnh chụp từ vệ tinh.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 36. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 36. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_36.mp3",
        "explain": "남자: 이번에 발사된 천리안 위성 2호는 지구와 우주의 기상 관측을 목적으로 2010년에 발사된 1호에 이어 한반도를 포함한 동북아시아 주변의 해양과 대기 환경을 관측을 목적으로 설계된 위성입니다. 천리안은 천 리, 즉멀리 볼 수 있는 눈이라는 의미를 가지고 있듯이 이 위성에서 촬영된 영상을 바탕으로 해양 쓰레기의 분포나 이동 경로, 적조 현상 등의 다양한 해상 정보를 파악하게 됩니다. 또한 해양에서 발생하는 미세 먼지와 오염 물질 탐지 등의 위성 정보를 제공하게 될 것입니다.",
        "explain_translation": "Nam: Vệ tinh Cheollian 2 vừa được phóng lần này là vệ tinh được thiết kế nhằm mục đích quan sát môi trường đại dương và khí quyển xung quanh Đông Bắc Á bao gồm cả bán đảo Triều Tiên, tiếp nối vệ tinh số 1 được phóng vào năm 2010 với mục đích quan sát khí tượng trái đất và vũ trụ. Giống như ý nghĩa của cái tên Cheollian là đôi mắt có thể nhìn xa ngàn dặm, dựa trên những hình ảnh chụp được từ vệ tinh này, chúng ta sẽ nắm bắt được nhiều thông tin hàng hải đa dạng như sự phân bố và lộ trình di chuyển của rác thải biển, hiện tượng thủy triều đỏ. Ngoài ra, nó cũng sẽ cung cấp các thông tin vệ tinh như phát hiện bụi mịn và các chất gây ô nhiễm phát sinh từ biển.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "이번에 발사된 위성은 기상 상황을 관측하는 역할을 한다.",
                "value_translation": "Vệ tinh được phóng lần này đóng vai trò quan sát tình hình khí tượng.",
                "file": null
            },
            {
                "value": "위성 정보를 통해 해양 쓰레기가 어디로 이동하는지 알 수 있다.",
                "value_translation": "Thông qua thông tin vệ tinh, có thể biết được rác thải biển di chuyển đi đâu.",
                "file": null
            },
            {
                "value": "바다의 환경 문제와 대기 상황을 촬영하는 위성이 발사될 예정이다.",
                "value_translation": "Một vệ tinh chụp ảnh tình hình khí quyển và các vấn đề môi trường biển dự kiến sẽ được phóng.",
                "file": null
            },
            {
                "value": "한반도의 주변 환경을 감시하기 위한 특별한 위성이 운영되고 있다.",
                "value_translation": "Một vệ tinh đặc biệt để giám sát môi trường xung quanh bán đảo Triều Tiên đang được vận hành.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 37. 다음을 듣고 물음에 답하십시오. 여자의 중심 생각으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 37. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn ý chính phù hợp nhất của người phụ nữ.",
        "audio_file": "question_37.mp3",
        "explain": "남자: 박사님, 유럽에 비해 쌀을 주식으로 하는 동아시아인들의 비만이 상대적으로 적다는 연구 결과가 있다고 하는데요. 사실입니까?\r\n여자: 네, 그렇습니다. 지금은 식생활의 서구화 및 고칼로리 식품의 소비 증가등으로 큰 차이가 없어졌지만 유럽과 비교하면 전통적으로 한국 등 동아시아인들에게 비만이나 당뇨병이 적었습니다. 이는 오랜 벼농사 덕분에 탄수화물 섭취가 많았기 때문으로 보고 있습니다. 이것이 유전적인 진화로 나타나 비만이나 당뇨의 부작용을 막은 것입니다. 반면에 오랜 목축업으로 우유 섭취량이 많은 유럽인들이 우유를 불편 없이 마실 수 있는 것과 유사합니다. 상대적으로 동양인들은 유당 분해 효소가 없어 우유를 마시면 자주 배탈이 나는 것과 같은 현상이지요.",
        "explain_translation": "Nam: Thưa Tiến sĩ, nghe nói có kết quả nghiên cứu cho thấy tỷ lệ béo phì của người Đông Á, những người lấy gạo làm thực phẩm chính, thấp hơn so với người châu Âu. Có đúng như vậy không ạ?\nNữ: Vâng, đúng vậy. Hiện nay sự khác biệt lớn đã biến mất do sự Tây hóa trong thói quen ăn uống và tiêu thụ thực phẩm nhiều calo tăng lên, nhưng nếu so với châu Âu thì theo truyền thống, người Đông Á như Hàn Quốc ít bị béo phì hay tiểu đường hơn. Điều này được cho là do lượng tiêu thụ carbohydrate cao nhờ việc canh tác lúa nước lâu đời. Điều này đã xuất hiện như một sự tiến hóa di truyền, ngăn chặn các tác dụng phụ của béo phì hoặc tiểu đường. Ngược lại, nó tương tự như việc người châu Âu tiêu thụ nhiều sữa nhờ ngành chăn nuôi lâu đời nên có thể uống sữa mà không gặp khó khăn gì. Tương đối thì người phương Đông không có enzyme phân giải lactose nên thường xuyên bị đau bụng khi uống sữa, đó là hiện tượng tương tự như vậy.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": "전통적인 식생활이 변화하면서 새로운 질병들이 생겨난다.",
                "value_translation": "Khi thói quen ăn uống truyền thống thay đổi, những căn bệnh mới sẽ nảy sinh.",
                "file": null
            },
            {
                "value": "유럽 인과 동양인의 식습관 차이는 오랜 역사를 가지고 있다.",
                "value_translation": "Sự khác biệt trong thói quen ăn uống giữa người châu Âu và người phương Đông có lịch sử lâu đời.",
                "file": null
            },
            {
                "value": "먹는 음식의 종류에 따라 건강을 지키는 방법이 각기 다르다.",
                "value_translation": "Tùy thuộc vào loại thực phẩm ăn vào, phương pháp bảo vệ sức khỏe là khác nhau.",
                "file": null
            },
            {
                "value": "주식으로 하는 식품이 유전적 진화를 하게 되어 부작용을 억제한다.",
                "value_translation": "Thực phẩm được lấy làm món chính sẽ trải qua quá trình tiến hóa di truyền để ức chế các tác dụng phụ.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 38. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 38. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_38.mp3",
        "explain": "남자: 박사님, 유럽에 비해 쌀을 주식으로 하는 동아시아인들의 비만이 상대적으로 적다는 연구 결과가 있다고 하는데요. 사실입니까?\r\n여자: 네, 그렇습니다. 지금은 식생활의 서구화 및 고칼로리 식품의 소비 증가등으로 큰 차이가 없어졌지만 유럽과 비교하면 전통적으로 한국 등 동아시아인들에게 비만이나 당뇨병이 적었습니다. 이는 오랜 벼농사 덕분에 탄수화물 섭취가 많았기 때문으로 보고 있습니다. 이것이 유전적인 진화로 나타나 비만이나 당뇨의 부작용을 막은 것입니다. 반면에 오랜 목축업으로 우유 섭취량이 많은 유럽인들이 우유를 불편 없이 마실 수 있는 것과 유사합니다. 상대적으로 동양인들은 유당 분해 효소가 없어 우유를 마시면 자주 배탈이 나는 것과 같은 현상이지요.",
        "explain_translation": "Nam: Thưa Tiến sĩ, nghe nói có kết quả nghiên cứu cho thấy tỷ lệ béo phì của người Đông Á, những người lấy gạo làm thực phẩm chính, thấp hơn so với người châu Âu. Có đúng như vậy không ạ?\nNữ: Vâng, đúng vậy. Hiện nay sự khác biệt lớn đã biến mất do sự Tây hóa trong thói quen ăn uống và tiêu thụ thực phẩm nhiều calo tăng lên, nhưng nếu so với châu Âu thì theo truyền thống, người Đông Á như Hàn Quốc ít bị béo phì hay tiểu đường hơn. Điều này được cho là do lượng tiêu thụ carbohydrate cao nhờ việc canh tác lúa nước lâu đời. Điều này đã xuất hiện như một sự tiến hóa di truyền, ngăn chặn các tác dụng phụ của béo phì hoặc tiểu đường. Ngược lại, nó tương tự như việc người châu Âu tiêu thụ nhiều sữa nhờ ngành chăn nuôi lâu đời nên có thể uống sữa mà không gặp khó khăn gì. Tương đối thì người phương Đông không có enzyme phân giải lactose nên thường xuyên bị đau bụng khi uống sữa, đó là hiện tượng tương tự như vậy.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "탄수화물 섭취가 많으면 살이 많이 찌게 된다.",
                "value_translation": "Nếu tiêu thụ nhiều carbohydrate thì sẽ bị tăng cân nhiều.",
                "file": null
            },
            {
                "value": "유럽 사람이 동양인에 비해 비만인 경우가 많다.",
                "value_translation": "Người châu Âu có nhiều trường hợp bị béo phì hơn so với người phương Đông.",
                "file": null
            },
            {
                "value": "한국의 벼농사는 오래전 유럽으로부터 전해졌다.",
                "value_translation": "Việc canh tác lúa nước của Hàn Quốc đã được truyền từ châu Âu vào từ lâu.",
                "file": null
            },
            {
                "value": "우유를 많이 마시면 유당 분해 효소가 생기지 않는다.",
                "value_translation": "Nếu uống nhiều sữa thì enzyme phân giải lactose sẽ không hình thành.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 39. 다음을 듣고 물음에 답하십시오. 이 대화 전의 내용으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 39. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn nội dung phù hợp nhất cho nội dung trước cuộc đối thoại này.",
        "audio_file": "question_39.mp3",
        "explain": "여자: 지금까지 가족과 함께 버스를 타고 세계 여행을 하고 오신 경험담을 들었는데요. 그럼 이젠 그 이야기를 책으로 내게 되신 이유와 내용에 대해소개를 좀 해주시겠습니까?\r\n남자: 처음 여행을 떠나게 된 가장 큰 목적이 아이들과 함께 보내는 시간을 만들기 위해서입니다. 그리고 우리가 세계 25개국 160여 곳의 도시를 여행하며 겪었던 이야기들을 많은 분들과 공유하고 싶었습니다. 나라와 지역에 따라 달라지는 문화나 음식 그리고 현지 사람들과의 소통을 통해 알게 되는 것들은 학교에서 배우는 지식과 비교할 수 없이 넓고 깊었습니다. 무언가 새롭게 시작하거나 도전할 때 주저하고 망설이는 분들에게 용기를 드릴 수 있다면 저로서는 큰 보람이라고 생각합니다.",
        "explain_translation": "Nữ: Cho đến giờ chúng ta đã nghe những chia sẻ về trải nghiệm đi du lịch thế giới bằng xe buýt cùng gia đình. Vậy bây giờ anh có thể giới thiệu một chút về lý do và nội dung của cuốn sách mà anh đã xuất bản từ câu chuyện đó không ạ?\nNam: Mục đích lớn nhất khi lần đầu tiên tôi lên đường đi du lịch là để tạo ra thời gian dành cho các con. Và tôi muốn chia sẻ những câu chuyện mà chúng tôi đã trải qua khi du lịch qua hơn 160 thành phố của 25 quốc gia trên thế giới với nhiều người. Những điều học được thông qua giao tiếp với người dân địa phương, đồ ăn và văn hóa thay đổi theo quốc gia và vùng miền rộng lớn và sâu sắc hơn so với kiến thức học được ở trường. Nếu tôi có thể truyền lòng can đảm cho những ai đang ngần ngại và do dự khi bắt đầu điều gì đó mới mẻ hoặc thử thách thì đối với tôi đó là một niềm tự hào lớn lao.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "부모와 자녀가 원만하게 소통하는 방법",
                "value_translation": "Phương pháp để cha mẹ và con cái giao tiếp thuận lợi.",
                "file": null
            },
            {
                "value": "가족과 버스로 세계 일주를 했던 이야기",
                "value_translation": "Câu chuyện về việc đã đi vòng quanh thế giới bằng xe buýt cùng gia đình.",
                "file": null
            },
            {
                "value": "전 세계의 도시를 여행할 때 필요한 것들",
                "value_translation": "Những thứ cần thiết khi đi du lịch các thành phố trên toàn thế giới.",
                "file": null
            },
            {
                "value": "세계 문화의 다양성을 공유해야 하는 이유",
                "value_translation": "Lý do tại sao phải chia sẻ sự đa dạng của văn hóa thế giới.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 40. 세계 문화의 다양성을 공유해야 하는 이유",
        "title_translation": "Câu 40. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_40.mp3",
        "explain": "여자: 지금까지 가족과 함께 버스를 타고 세계 여행을 하고 오신 경험담을 들었는데요. 그럼 이젠 그 이야기를 책으로 내게 되신 이유와 내용에 대해소개를 좀 해주시겠습니까?\r\n남자: 처음 여행을 떠나게 된 가장 큰 목적이 아이들과 함께 보내는 시간을 만들기 위해서입니다. 그리고 우리가 세계 25개국 160여 곳의 도시를 여행하며 겪었던 이야기들을 많은 분들과 공유하고 싶었습니다. 나라와 지역에 따라 달라지는 문화나 음식 그리고 현지 사람들과의 소통을 통해 알게 되는 것들은 학교에서 배우는 지식과 비교할 수 없이 넓고 깊었습니다. 무언가 새롭게 시작하거나 도전할 때 주저하고 망설이는 분들에게 용기를 드릴 수 있다면 저로서는 큰 보람이라고 생각합니다.",
        "explain_translation": "Nữ: Cho đến giờ chúng ta đã nghe những chia sẻ về trải nghiệm đi du lịch thế giới bằng xe buýt cùng gia đình. Vậy bây giờ anh có thể giới thiệu một chút về lý do và nội dung của cuốn sách mà anh đã xuất bản từ câu chuyện đó không ạ?\nNam: Mục đích lớn nhất khi lần đầu tiên tôi lên đường đi du lịch là để tạo ra thời gian dành cho các con. Và tôi muốn chia sẻ những câu chuyện mà chúng tôi đã trải qua khi du lịch qua hơn 160 thành phố của 25 quốc gia trên thế giới với nhiều người. Những điều học được thông qua giao tiếp với người dân địa phương, đồ ăn và văn hóa thay đổi theo quốc gia và vùng miền rộng lớn và sâu sắc hơn so với kiến thức học được ở trường. Nếu tôi có thể truyền lòng can đảm cho những ai đang ngần ngại và do dự khi bắt đầu điều gì đó mới mẻ hoặc thử thách thì đối với tôi đó là một niềm tự hào lớn lao.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "가족과 함께 있는 시간을 만들고 싶어서 여행을 떠났다.",
                "value_translation": "Tôi đã lên đường đi du lịch vì muốn tạo ra thời gian ở bên cạnh gia đình.",
                "file": null
            },
            {
                "value": "새로운 시작은 용기와 자신감을 찾을 수 있는 시간이다.",
                "value_translation": "Sự khởi đầu mới là thời gian có thể tìm thấy lòng can đảm và sự tự tin.",
                "file": null
            },
            {
                "value": "여행을 통해 자신을 깊이 돌아보는 여유를 가지게 된다.",
                "value_translation": "Thông qua du lịch, người ta có được sự thong thả để nhìn lại bản thân một cách sâu sắc.",
                "file": null
            },
            {
                "value": "세계의 많은 도시들은 각기 다른 건축 문화를 가지고 있다",
                "value_translation": "Nhiều thành phố trên thế giới có những nền văn hóa kiến trúc khác nhau.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 41. 다음을 듣고 물음에 답하십시오. 이 강연의 중심 내용으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 41. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn ý chính phù hợp nhất của bài giảng này.",
        "audio_file": "question_41.mp3",
        "explain": "남자: 인류는 아주 오래전부터 바람이나 물을 이용하여 일상생활에 필요한 에너지를 만들어 왔습니다. 이러한 에너지들은 이어 등장하는 석유나 석탄등의 화석 연로로 인해 점점 사라지게 되었지요. 그러나 연료를 만드는 자원이 고갈되어 가고 환경오염 등의 문제를 발생시키면서 이를 대신하게 될 에너지를 찾은 것이 바로 태양열과 태양광입니다. 태양의 열로 직접물을 데워 난방이나 온수로 쓰거나 전기를 생산하는 것입니다. 물론 햇빛을 이용한 것은 오래 되었지만 매우 적은 양만 사용할 수 있었고 이\r\n러한 불편함은 과학 기술의 발전에 힘입어 효율적 사용이 가능해졌습니다. 이러한 태양에너지는 환경오염을 일으키지 않으며 무한 생산이 가능하기때문에 앞으로 더욱 활성화될 것으로 전망됩니다.",
        "explain_translation": "Nam: Nhân loại đã tạo ra năng lượng cần thiết cho cuộc sống hàng ngày bằng cách sử dụng gió hoặc nước từ lâu. Những nguồn năng lượng này dần biến mất do sự xuất hiện của các loại nhiên liệu hóa thạch như dầu mỏ hay than đá. Tuy nhiên, khi các nguồn tài nguyên tạo ra nhiên liệu cạn kiệt và gây ra các vấn đề như ô nhiễm môi trường, năng lượng mặt trời đã được tìm thấy để thay thế chúng. Đó là việc sử dụng nhiệt từ mặt trời để đun nước trực tiếp dùng để sưởi ấm, nước nóng hoặc sản xuất điện. Tất nhiên, việc sử dụng ánh sáng mặt trời đã có từ lâu nhưng chỉ sử dụng được một lượng rất nhỏ, và sự bất tiện này đã trở nên khả thi để sử dụng hiệu quả nhờ vào sự phát triển của khoa học công nghệ. Năng lượng mặt trời như vậy không gây ô nhiễm môi trường và có thể sản xuất vô hạn, nên dự báo sẽ ngày càng được kích hoạt mạnh mẽ hơn trong tương lai.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": "환경 문제를 일으키지 않는 대체 에너지 개발이 시급하다.",
                "value_translation": "Việc phát triển năng lượng thay thế không gây vấn đề môi trường là rất cấp bách.",
                "file": null
            },
            {
                "value": "과학 기술의 발전은 인류의 생활을 효율적으로 변화시켰다.",
                "value_translation": "Sự phát triển của khoa học công nghệ đã thay đổi cuộc sống của nhân loại một cách hiệu quả.",
                "file": null
            },
            {
                "value": "일상에서 필요한 전기의 수요는 꾸준히 증가할 수밖에 없다.",
                "value_translation": "Nhu cầu về điện cần thiết trong cuộc sống hàng ngày chắc chắn sẽ tăng lên không ngừng.",
                "file": null
            },
            {
                "value": "고갈 염려가 없는 태양에너지는 앞으로 활용도가 커질 것이다.",
                "value_translation": "Năng lượng mặt trời không lo bị cạn kiệt sẽ có tính ứng dụng cao hơn trong tương lai.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 42. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 42. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_42.mp3",
        "explain": "남자: 인류는 아주 오래전부터 바람이나 물을 이용하여 일상생활에 필요한 에너지를 만들어 왔습니다. 이러한 에너지들은 이어 등장하는 석유나 석탄등의 화석 연로로 인해 점점 사라지게 되었지요. 그러나 연료를 만드는 자원이 고갈되어 가고 환경오염 등의 문제를 발생시키면서 이를 대신하게 될 에너지를 찾은 것이 바로 태양열과 태양광입니다. 태양의 열로 직접물을 데워 난방이나 온수로 쓰거나 전기를 생산하는 것입니다. 물론 햇빛을 이용한 것은 오래 되었지만 매우 적은 양만 사용할 수 있었고 이\r\n러한 불편함은 과학 기술의 발전에 힘입어 효율적 사용이 가능해졌습니다. 이러한 태양에너지는 환경오염을 일으키지 않으며 무한 생산이 가능하기때문에 앞으로 더욱 활성화될 것으로 전망됩니다.",
        "explain_translation": "Nam: Nhân loại đã tạo ra năng lượng cần thiết cho cuộc sống hàng ngày bằng cách sử dụng gió hoặc nước từ lâu. Những nguồn năng lượng này dần biến mất do sự xuất hiện của các loại nhiên liệu hóa thạch như dầu mỏ hay than đá. Tuy nhiên, khi các nguồn tài nguyên tạo ra nhiên liệu cạn kiệt và gây ra các vấn đề như ô nhiễm môi trường, năng lượng mặt trời đã được tìm thấy để thay thế chúng. Đó là việc sử dụng nhiệt từ mặt trời để đun nước trực tiếp dùng để sưởi ấm, nước nóng hoặc sản xuất điện. Tất nhiên, việc sử dụng ánh sáng mặt trời đã có từ lâu nhưng chỉ sử dụng được một lượng rất nhỏ, và sự bất tiện này đã trở nên khả thi để sử dụng hiệu quả nhờ vào sự phát triển của khoa học công nghệ. Năng lượng mặt trời như vậy không gây ô nhiễm môi trường và có thể sản xuất vô hạn, nên dự báo sẽ ngày càng được kích hoạt mạnh mẽ hơn trong tương lai.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "물을 이용한 에너지는 양이 너무 적어 활용도가 떨어진다.",
                "value_translation": "Năng lượng sử dụng nước có lượng quá ít nên tính ứng dụng thấp.",
                "file": null
            },
            {
                "value": "난방이나 온수를 만들기 위해 전기 생산을 확대하고 있다.",
                "value_translation": "Sản lượng điện đang được mở rộng để tạo ra hệ thống sưởi hoặc nước nóng.",
                "file": null
            },
            {
                "value": "인류가 햇빛을 에너지로 사용한 것은 오랜 역사를 가지고 있다.",
                "value_translation": "Việc nhân loại sử dụng ánh sáng mặt trời làm năng lượng có lịch sử lâu đời.",
                "file": null
            },
            {
                "value": "화석 연료는 환경 문제를 일으키기 때문에 이제 사용하지 않는다.",
                "value_translation": "Nhiên liệu hóa thạch gây ra các vấn đề môi trường nên hiện nay không còn được sử dụng.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 43. 다음을 듣고 물음에 답하십시오. 무엇에 대한 내용인지 알맞은 것을 고르십시오.",
        "title_translation": "Câu 43. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn nội dung phù hợp về những gì đang được nói đến.",
        "audio_file": "question_43.mp3",
        "explain": "여자: 제가 지금 와 있는 이곳은 전라남도 순천의 시골 마을입니다. 보시는 바와 같이 노랗게 벼가 익어가는 논 위에 500개가 넘는 허수아비가 세워져 있는데요. 원래 허수아비는 새들로부터 벼의 피해를 막기 위해 세워놓는 것인데 이렇게 색색의 벼를 이용해 만든 다양한 그림을 배경으로 수많은 허수아비들이 그네뛰기, 줄타기 등의 전통 놀이를 표현하고 있습니다. 청명한 가을 하늘과 황금 들판이 어우러져 멋진 풍경을 연출하고 있어 관광객들의 눈길을 사로잡고 있습니다. 주민 대표의 말에 따르면 이 지역의 농업을 활성화하고 자연을 되살릴 수 있는 친환경 농업이 얼마나 중요한지 알리기 위해 이번 허수아비 전시를 기획했다고 합니다. 또한 농경 사회의 전통 풍습을 살리고 주민 화합의 역할을 주도적으로 이끌어 나가는 이런 행사를 계속 이어가겠다고 말했습니다.",
        "explain_translation": "Nữ: Nơi tôi đang đứng hiện nay là một ngôi làng nông thôn ở Suncheon, tỉnh Jeollanam-do. Như quý vị thấy, có hơn 500 hình bù nhìn được dựng trên những cánh đồng lúa đang chín vàng. Vốn dĩ bù nhìn được dựng để ngăn chặn chim phá hoại lúa, nhưng vô số hình bù nhìn ở đây đang thể hiện các trò chơi truyền thống như chơi đu, đi dây trên nền những bức tranh đa dạng được tạo ra bằng các loại lúa nhiều màu sắc. Bầu trời thu trong xanh hòa quyện cùng cánh đồng vàng óng đang tạo nên một phong cảnh tuyệt đẹp thu hút ánh nhìn của du khách. Theo lời đại diện của cư dân, họ đã lên kế hoạch cho cuộc triển lãm bù nhìn này để quảng bá tầm quan trọng của nông nghiệp thân thiện với môi trường có thể phục hồi tự nhiên và thúc đẩy nông nghiệp của khu vực này. Ngoài ra, ông ấy cũng nói sẽ tiếp tục duy trì những sự kiện như thế này để khôi phục phong tục truyền thống của xã hội nông nghiệp và dẫn dắt vai trò đoàn kết cư dân.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "지방마다 특색이 있는 축제를 개최해 관광객들이 몰리고 있다.",
                "value_translation": "Du khách đang đổ xô đến do các địa phương tổ chức những lễ hội mang bản sắc riêng.",
                "file": null
            },
            {
                "value": "다양한 허수아비의 전시를 통해 전통 예술을 되살리고 있다.",
                "value_translation": "Nghệ thuật truyền thống đang được khôi phục thông qua việc triển lãm các loại bù nhìn đa dạng.",
                "file": null
            },
            {
                "value": "지역 주민들이 힘을 합쳐 전통 풍습의 계승 행사를 하고 있다.",
                "value_translation": "Cư dân địa phương đang hợp sức tổ chức các sự kiện kế thừa phong tục truyền thống.",
                "file": null
            },
            {
                "value": "황금으로 조성한 가을 들판의 아름다운 풍경을 소개하고 있다.",
                "value_translation": "Đang giới thiệu phong cảnh tuyệt đẹp của cánh đồng mùa thu vàng óng.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 44. 가을 논 위에 허수아비를 많이 세워놓은 이유로 맞는 것을 고르십시오.",
        "title_translation": "Câu 44. Chọn lý do đúng cho việc dựng nhiều bù nhìn trên cánh đồng lúa mùa thu.",
        "audio_file": "question_44.mp3",
        "explain": "여자: 제가 지금 와 있는 이곳은 전라남도 순천의 시골 마을입니다. 보시는 바와 같이 노랗게 벼가 익어가는 논 위에 500개가 넘는 허수아비가 세워져 있는데요. 원래 허수아비는 새들로부터 벼의 피해를 막기 위해 세워놓는 것인데 이렇게 색색의 벼를 이용해 만든 다양한 그림을 배경으로 수많은 허수아비들이 그네뛰기, 줄타기 등의 전통 놀이를 표현하고 있습니다. 청명한 가을 하늘과 황금 들판이 어우러져 멋진 풍경을 연출하고 있어 관광객들의 눈길을 사로잡고 있습니다. 주민 대표의 말에 따르면 이 지역의 농업을 활성화하고 자연을 되살릴 수 있는 친환경 농업이 얼마나 중요한지 알리기 위해 이번 허수아비 전시를 기획했다고 합니다. 또한 농경 사회의 전통 풍습을 살리고 주민 화합의 역할을 주도적으로 이끌어 나가는 이런 행사를 계속 이어가겠다고 말했습니다.",
        "explain_translation": "Nữ: Nơi tôi đang đứng hiện nay là một ngôi làng nông thôn ở Suncheon, tỉnh Jeollanam-do. Như quý vị thấy, có hơn 500 hình bù nhìn được dựng trên những cánh đồng lúa đang chín vàng. Vốn dĩ bù nhìn được dựng để ngăn chặn chim phá hoại lúa, nhưng vô số hình bù nhìn ở đây đang thể hiện các trò chơi truyền thống như chơi đu, đi dây trên nền những bức tranh đa dạng được tạo ra bằng các loại lúa nhiều màu sắc. Bầu trời thu trong xanh hòa quyện cùng cánh đồng vàng óng đang tạo nên một phong cảnh tuyệt đẹp thu hút ánh nhìn của du khách. Theo lời đại diện của cư dân, họ đã lên kế hoạch cho cuộc triển lãm bù nhìn này để quảng bá tầm quan trọng của nông nghiệp thân thiện với môi trường có thể phục hồi tự nhiên và thúc đẩy nông nghiệp của khu vực này. Ngoài ra, ông ấy cũng nói sẽ tiếp tục duy trì những sự kiện như thế này để khôi phục phong tục truyền thống của xã hội nông nghiệp và dẫn dắt vai trò đoàn kết cư dân.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 3,
        "answers": [
            {
                "value": "새들의 공격으로부터 벼의 피해를 방지하기 위해",
                "value_translation": "Để ngăn chặn thiệt hại cho lúa từ sự tấn công của lũ chim.",
                "file": null
            },
            {
                "value": "관광객들이 많이 찾을 수 있는 명소를 만들기 위해",
                "value_translation": "Để tạo ra một danh lam thắng cảnh thu hút nhiều du khách.",
                "file": null
            },
            {
                "value": "새로운 농업 기술의 성과와 결과물을 홍보하기 위해",
                "value_translation": "Để quảng bá những thành quả và kết quả của công nghệ nông nghiệp mới.",
                "file": null
            },
            {
                "value": "생태계를 살리는 친환경 농업의 중요성을 알리기 위해",
                "value_translation": "Để thông báo về tầm quan trọng của nông nghiệp thân thiện với môi trường giúp cứu sống hệ sinh thái.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 45. 다음을 듣고 물음에 답하십시오. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 45. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_45.mp3",
        "explain": "여자: 우리나라의 전통주인 막걸리와 동동주의 차이를 아십니까? 두 가지 모두 양조주에 해당하며 재료도 쌀이나 보리와 같은 곡물로 만듭니다. 양조주란 과일이나 곡물을 발효시켜 만드는 술로 맥주, 와인, 과실주 등이 이에 속합니다. 막걸리는 말 그대로 막 걸러 낸 술이고 동동주는 자연적으로 걸러지게 만들어 막걸리에 비해 투명하며 밥알이나 곡물이 위에 동동 떠 있다고 해서 붙인 이름입니다. 이름에서 알 수 있듯이 만드는 방식이 좀 다르기 때문에 알코올 도수도 막걸리보다 동동주가 더 높습니다. 전\r\n통적인 막걸리는 곡물로 만들지만 최근에는 여기에 딸기, 귤과 같은 과일이나 땅콩, 밤 등의 견과류를 첨가해 술을 싫어하는 사람들도 가볍게 마실 수 있도록 그 맛과 종류가 다양해지고 있습니다.",
        "explain_translation": "Nữ: Bạn có biết sự khác biệt giữa Makgeolli và Dongdongju, những loại rượu truyền thống của nước ta không? Cả hai đều thuộc loại rượu ủ và nguyên liệu đều được làm từ các loại ngũ cốc như gạo hoặc lúa mạch. Rượu ủ là loại rượu được làm bằng cách lên men trái cây hoặc ngũ cốc, bao gồm bia, rượu vang, rượu trái cây... Makgeolli đúng như cái tên là loại rượu vừa mới lọc xong, còn Dongdongju được tạo ra để lọc tự nhiên nên trong hơn so với Makgeolli và cái tên này bắt nguồn từ việc các hạt cơm hay ngũ cốc nổi lềnh bềnh (dong-dong) ở phía trên. Như có thể thấy từ cái tên, do cách thức chế biến hơi khác nhau nên nồng độ cồn của Dongdongju cũng cao hơn Makgeolli. Makgeolli truyền thống được làm từ ngũ cốc nhưng gần đây hương vị và chủng loại đang trở nên đa dạng hơn bằng cách thêm các loại trái cây như dâu tây, quýt hoặc các loại hạt như lạc, hạt dẻ để ngay cả những người không thích rượu cũng có thể uống một cách nhẹ nhàng.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "동동주는 막걸리보다 맑아서 누구나 마시기가 편하다.",
                "value_translation": "Dongdongju trong hơn Makgeolli nên bất kỳ ai cũng thấy dễ uống.",
                "file": null
            },
            {
                "value": "막걸리와 동동주는 재료와 만드는 방법에서 차이가 있다.",
                "value_translation": "Makgeolli và Dongdongju có sự khác biệt về nguyên liệu và cách chế biến.",
                "file": null
            },
            {
                "value": "양조주는 발효시켜 만드는 술로 와인도 여기에 포함된다.",
                "value_translation": "Rượu ủ là loại rượu được tạo ra bằng cách lên men, rượu vang cũng bao gồm trong đó.",
                "file": null
            },
            {
                "value": "막걸리는 과일로 만들기 때문에 동동주보다 도수가 세다.",
                "value_translation": "Vì Makgeolli được làm từ trái cây nên nồng độ cồn mạnh hơn Dongdongju.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 46. 여자의 태도로 알맞은 것을 고르십시오.",
        "title_translation": "Câu 46. Chọn thái độ phù hợp của người phụ nữ.",
        "audio_file": "question_46.mp3",
        "explain": "여자: 우리나라의 전통주인 막걸리와 동동주의 차이를 아십니까? 두 가지 모두 양조주에 해당하며 재료도 쌀이나 보리와 같은 곡물로 만듭니다. 양조주란 과일이나 곡물을 발효시켜 만드는 술로 맥주, 와인, 과실주 등이 이에 속합니다. 막걸리는 말 그대로 막 걸러 낸 술이고 동동주는 자연적으로 걸러지게 만들어 막걸리에 비해 투명하며 밥알이나 곡물이 위에 동동 떠 있다고 해서 붙인 이름입니다. 이름에서 알 수 있듯이 만드는 방식이 좀 다르기 때문에 알코올 도수도 막걸리보다 동동주가 더 높습니다. 전\r\n통적인 막걸리는 곡물로 만들지만 최근에는 여기에 딸기, 귤과 같은 과일이나 땅콩, 밤 등의 견과류를 첨가해 술을 싫어하는 사람들도 가볍게 마실 수 있도록 그 맛과 종류가 다양해지고 있습니다.",
        "explain_translation": "Nữ: Bạn có biết sự khác biệt giữa Makgeolli và Dongdongju, những loại rượu truyền thống của nước ta không? Cả hai đều thuộc loại rượu ủ và nguyên liệu đều được làm từ các loại ngũ cốc như gạo hoặc lúa mạch. Rượu ủ là loại rượu được làm bằng cách lên men trái cây hoặc ngũ cốc, bao gồm bia, rượu vang, rượu trái cây... Makgeolli đúng như cái tên là loại rượu vừa mới lọc xong, còn Dongdongju được tạo ra để lọc tự nhiên nên trong hơn so với Makgeolli và cái tên này bắt nguồn từ việc các hạt cơm hay ngũ cốc nổi lềnh bềnh (dong-dong) ở phía trên. Như có thể thấy từ cái tên, do cách thức chế biến hơi khác nhau nên nồng độ cồn của Dongdongju cũng cao hơn Makgeolli. Makgeolli truyền thống được làm từ ngũ cốc nhưng gần đây hương vị và chủng loại đang trở nên đa dạng hơn bằng cách thêm các loại trái cây như dâu tây, quýt hoặc các loại hạt như lạc, hạt dẻ để ngay cả những người không thích rượu cũng có thể uống một cách nhẹ nhàng.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "막걸리와 동동주의 차이를 비교하고 있다.",
                "value_translation": "Đang so sánh sự khác biệt giữa Makgeolli và Dongdongju.",
                "file": null
            },
            {
                "value": "다양한 전통주의 제조 방법을 설명하고 있다.",
                "value_translation": "Đang giải thích phương pháp sản xuất của nhiều loại rượu truyền thống.",
                "file": null
            },
            {
                "value": "술을 만들기 위해 필요한 재료를 소개하고 있다.",
                "value_translation": "Đang giới thiệu các nguyên liệu cần thiết để làm rượu.",
                "file": null
            },
            {
                "value": "발효 음식의 효능과 새로운 조리법을 제안하고 있다.",
                "value_translation": "Đ đang đề xuất các công dụng của thực phẩm lên men và công thức nấu ăn mới.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 47. 다음을 듣고 물음에 답하십시오. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 47. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_47.mp3",
        "explain": "여자: 인간의 내면을 섬세하게 다룬 영화로 해외의 여러 영화제에서 작품상을 수상하신 이영호 감독님을 모시고 말씀 나누고 있는데요. 올해의 영향력 있는 세계의 인물 100인에 선정되신 소감이 어떠십니까?\r\n남자: 전혀 생각하지 못한 일이었기 때문에 처음 그 소식을 들었을 때 좀 당황스러웠습니다. 영화도 제가 늘 해 오던 일이고 하고 싶은 이야기를 충실하게 담아 낸 것뿐인데 전 세계에서 많은 분들이 좋아해 주시니 감사할 따름입니다. 사실 제 영화를 한마디로 표현하자면 불편한 영화라고 할 수 있습니다. 남들이 하지 않는, 하고 싶지 않은 이야기를 파고드는 편이지요. 제가 특히 관심을 가지고 있는 것은 인간 자체에 대한 깊은 성찰과 이해입니다. 그걸 날카롭게 파헤치고 드러내는 과정이 국경과인종을 초월한 공감대를 얻게 된 것이 아닌가 생각합니다.",
        "explain_translation": "Nữ: Chúng ta đang trò chuyện cùng đạo diễn Lee Young-ho, người đã giành giải Tác phẩm xuất sắc nhất tại nhiều liên hoan phim quốc tế với những bộ phim khai thác tinh tế nội tâm con người. Đạo diễn cảm thấy thế nào khi được chọn vào danh sách 100 nhân vật có tầm ảnh hưởng nhất thế giới năm nay?\nNam: Vì đó là điều tôi hoàn toàn không nghĩ tới nên khi lần đầu nghe tin tôi đã hơi bối rối. Làm phim cũng là việc tôi vẫn luôn làm và tôi chỉ cố gắng truyền tải trọn vẹn những câu chuyện mình muốn kể, nhưng được nhiều người trên thế giới yêu thích nên tôi chỉ biết cảm ơn. Thực tế, nếu diễn tả bộ phim của tôi bằng một từ thì có thể gọi đó là những bộ phim 'gây khó chịu'. Tôi thuộc kiểu người đào sâu vào những câu chuyện mà người khác không làm hoặc không muốn làm. Điều tôi đặc biệt quan tâm là sự chiêm nghiệm và thấu hiểu sâu sắc về chính con người. Tôi nghĩ quá trình mổ xẻ và phơi bày điều đó một cách sắc bén có lẽ đã tạo được sự đồng cảm vượt qua biên giới và sắc tộc.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "남자는 영화제 수상을 어느 정도 기대하고 있었다.",
                "value_translation": "Người đàn ông đã kỳ vọng ở một mức độ nào đó vào việc giành giải thưởng tại liên hoan phim.",
                "file": null
            },
            {
                "value": "남자가 만든 영화가 전 세계적으로 인정을 받았다.",
                "value_translation": "Bộ phim do người đàn ông làm ra đã được công nhận trên toàn thế giới.",
                "file": null
            },
            {
                "value": "관객들을 불편하게 만드는 영화는 성공하기 어렵다.",
                "value_translation": "Những bộ phim gây khó chịu cho khán giả thì khó có thể thành công.",
                "file": null
            },
            {
                "value": "사람들이 원하는 내용을 영화로 만들면 인기가 있다.",
                "value_translation": "Nếu làm phim về những nội dung mà mọi người mong muốn thì sẽ nhận được sự yêu thích.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 48. 남자의 태도로 알맞은 것을 고르십시오.",
        "title_translation": "Câu 48. Chọn thái độ phù hợp của người đàn ông.",
        "audio_file": "question_48.mp3",
        "explain": "여자: 인간의 내면을 섬세하게 다룬 영화로 해외의 여러 영화제에서 작품상을 수상하신 이영호 감독님을 모시고 말씀 나누고 있는데요. 올해의 영향력 있는 세계의 인물 100인에 선정되신 소감이 어떠십니까?\r\n남자: 전혀 생각하지 못한 일이었기 때문에 처음 그 소식을 들었을 때 좀 당황스러웠습니다. 영화도 제가 늘 해 오던 일이고 하고 싶은 이야기를 충실하게 담아 낸 것뿐인데 전 세계에서 많은 분들이 좋아해 주시니 감사할 따름입니다. 사실 제 영화를 한마디로 표현하자면 불편한 영화라고 할 수 있습니다. 남들이 하지 않는, 하고 싶지 않은 이야기를 파고드는 편이지요. 제가 특히 관심을 가지고 있는 것은 인간 자체에 대한 깊은 성찰과 이해입니다. 그걸 날카롭게 파헤치고 드러내는 과정이 국경과인종을 초월한 공감대를 얻게 된 것이 아닌가 생각합니다.",
        "explain_translation": "Nữ: Chúng ta đang trò chuyện cùng đạo diễn Lee Young-ho, người đã giành giải Tác phẩm xuất sắc nhất tại nhiều liên hoan phim quốc tế với những bộ phim khai thác tinh tế nội tâm con người. Đạo diễn cảm thấy thế nào khi được chọn vào danh sách 100 nhân vật có tầm ảnh hưởng nhất thế giới năm nay?\nNam: Vì đó là điều tôi hoàn toàn không nghĩ tới nên khi lần đầu nghe tin tôi đã hơi bối rối. Làm phim cũng là việc tôi vẫn luôn làm và tôi chỉ cố gắng truyền tải trọn vẹn những câu chuyện mình muốn kể, nhưng được nhiều người trên thế giới yêu thích nên tôi chỉ biết cảm ơn. Thực tế, nếu diễn tả bộ phim của tôi bằng một từ thì có thể gọi đó là những bộ phim 'gây khó chịu'. Tôi thuộc kiểu người đào sâu vào những câu chuyện mà người khác không làm hoặc không muốn làm. Điều tôi đặc biệt quan tâm là sự chiêm nghiệm và thấu hiểu sâu sắc về chính con người. Tôi nghĩ quá trình mổ xẻ và phơi bày điều đó một cách sắc bén có lẽ đã tạo được sự đồng cảm vượt qua biên giới và sắc tộc.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 0,
        "answers": [
            {
                "value": "자신이 영화로 표현하고자 했던 것들을 솔직하게 드러내고 있다.",
                "value_translation": "Đang bộc lộ một cách thành thật những điều mình muốn thể hiện thông qua bộ phim.",
                "file": null
            },
            {
                "value": "영화를 만드는 과정을 통해 관객과의 소통을 중요시하고 있다.",
                "value_translation": "Đang coi trọng việc giao tiếp với khán giả thông qua quá trình làm phim.",
                "file": null
            },
            {
                "value": "감독과 관객이 만나 소통하는 방법을 다양하게 소개하고 있다.",
                "value_translation": "Đang giới thiệu đa dạng các phương pháp để đạo diễn và khán giả gặp gỡ và giao tiếp.",
                "file": null
            },
            {
                "value": "영화를 성공시키기 위한 효율적인 홍보 정책을 제시하고 있다.",
                "value_translation": "Đang đề xuất các chính sách quảng bá hiệu quả để làm cho bộ phim thành công.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 49. 다음을 듣고 물음에 답하십시오. 들은 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 49. Nghe đoạn hội thoại sau và trả lời câu hỏi. Chọn nội dung giống với những gì đã nghe.",
        "audio_file": "question_49.mp3",
        "explain": "남자: 지금 보시는 이곳이 바로 비무장지대입니다. 비무장지대란 국제 협약이나 조약으로 인해 군대의 주둔이나 무기 사용이 금지된 곳을 말합니다. 우리나라의 비무장지대는 1953년 한국 전쟁을 끝내기 위해 체결된 휴전 협정에 의해 남북 각각 4km 정도로 설정이 되었습니다. 한민족 분단의 역사를 상징적으로 보여 주는 곳으로 세계에서 유일하다고 할 수 있습니다. 이곳은 지난 60여 년간 인간의 출입이 통제되었기 때문에 자연의 생태계가 완벽하게 복원되어 있다고 해도 과언이 아닙니다. 화면으로는 잘 보이지 않지만 두루미나 삵 등 멸종 위기의 야생 동물은 물론이고 희귀한 식물들이 다수 자생하고 있어 생태적 가치가 매우 높습니다. 전쟁 이전에 논이나 마을이 있던 곳이 습지나 숲과 같은 자연 생태로 변화한 특징을 가지고 있어 앞으로도 이 지역을 잘 보존해야 할 것입니다.",
        "explain_translation": "Nam: Nơi các bạn đang thấy đây chính là Khu phi quân sự (DMZ). Khu phi quân sự là nơi bị cấm đồn trú quân đội hoặc sử dụng vũ khí do các hiệp ước hoặc hiệp định quốc tế. Khu phi quân sự của nước ta được thiết lập khoảng 4km ở mỗi bên Nam - Bắc theo Hiệp định Đình chiến được ký kết năm 1953 để kết thúc Chiến tranh Triều Tiên. Đây là nơi duy nhất trên thế giới cho thấy một cách biểu tượng lịch sử chia cắt của dân tộc. Do nơi này đã bị cấm con người ra vào trong hơn 60 năm qua nên không quá lời khi nói rằng hệ sinh thái tự nhiên đã được phục hồi hoàn toàn. Dù không nhìn rõ qua màn hình nhưng nơi đây có giá trị sinh thái rất cao với nhiều loài thực vật quý hiếm cũng như các loài động vật hoang dã có nguy cơ tuyệt chủng như sếu hay mèo rừng đang sinh sống tự nhiên. Những nơi vốn là ruộng lúa hay làng mạc trước chiến tranh đã có đặc điểm biến đổi thành hệ sinh thái tự nhiên như đầm lầy hay rừng rậm, vì vậy chúng ta cần phải bảo tồn tốt khu vực này trong tương lai.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 2,
        "answers": [
            {
                "value": "전 세계에 비무장지대가 남아 있는 곳은 많지 않다.",
                "value_translation": "Trên toàn thế giới không còn nhiều nơi có Khu phi quân sự.",
                "file": null
            },
            {
                "value": "생태 공원으로 복원된 이후 사람들이 많이 찾고 있다.",
                "value_translation": "Kể từ sau khi được phục hồi thành công viên sinh thái, có rất nhiều người tìm đến.",
                "file": null
            },
            {
                "value": "한반도의 비무장지대는 한국 전쟁 이후 조성되었다.",
                "value_translation": "Khu phi quân sự trên bán đảo Triều Tiên được hình thành sau Chiến tranh Triều Tiên.",
                "file": null
            },
            {
                "value": "이 지역은 원래 산이었으나 전쟁 때 대부분 파괴되었다.",
                "value_translation": "Khu vực này vốn dĩ là núi nhưng phần lớn đã bị phá hủy trong chiến tranh.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 50. 남자의 태도로 알맞은 것을 고르십시오.",
        "title_translation": "Câu 50. Chọn thái độ phù hợp của người đàn ông.",
        "audio_file": "question_50.mp3",
        "explain": "남자: 지금 보시는 이곳이 바로 비무장지대입니다. 비무장지대란 국제 협약이나 조약으로 인해 군대의 주둔이나 무기 사용이 금지된 곳을 말합니다. 우리나라의 비무장지대는 1953년 한국 전쟁을 끝내기 위해 체결된 휴전 협정에 의해 남북 각각 4km 정도로 설정이 되었습니다. 한민족 분단의 역사를 상징적으로 보여 주는 곳으로 세계에서 유일하다고 할 수 있습니다. 이곳은 지난 60여 년간 인간의 출입이 통제되었기 때문에 자연의 생태계가 완벽하게 복원되어 있다고 해도 과언이 아닙니다. 화면으로는 잘 보이지 않지만 두루미나 삵 등 멸종 위기의 야생 동물은 물론이고 희귀한 식물들이 다수 자생하고 있어 생태적 가치가 매우 높습니다. 전쟁 이전에 논이나 마을이 있던 곳이 습지나 숲과 같은 자연 생태로 변화한 특징을 가지고 있어 앞으로도 이 지역을 잘 보존해야 할 것입니다.",
        "explain_translation": "Nam: Nơi các bạn đang thấy đây chính là Khu phi quân sự (DMZ). Khu phi quân sự là nơi bị cấm đồn trú quân đội hoặc sử dụng vũ khí do các hiệp ước hoặc hiệp định quốc tế. Khu phi quân sự của nước ta được thiết lập khoảng 4km ở mỗi bên Nam - Bắc theo Hiệp định Đình chiến được ký kết năm 1953 để kết thúc Chiến tranh Triều Tiên. Đây là nơi duy nhất trên thế giới cho thấy một cách biểu tượng lịch sử chia cắt của dân tộc. Do nơi này đã bị cấm con người ra vào trong hơn 60 năm qua nên không quá lời khi nói rằng hệ sinh thái tự nhiên đã được phục hồi hoàn toàn. Dù không nhìn rõ qua màn hình nhưng nơi đây có giá trị sinh thái rất cao với nhiều loài thực vật quý hiếm cũng như các loài động vật hoang dã có nguy cơ tuyệt chủng như sếu hay mèo rừng đang sinh sống tự nhiên. Những nơi vốn là ruộng lúa hay làng mạc trước chiến tranh đã có đặc điểm biến đổi thành hệ sinh thái tự nhiên như đầm lầy hay rừng rậm, vì vậy chúng ta cần phải bảo tồn tốt khu vực này trong tương lai.",
        "image_file": null,
        "type": "Listening",
        "correct_index": 1,
        "answers": [
            {
                "value": "자연환경을 복원시켜야 하는 이유를 설명하고 있다.",
                "value_translation": "Đang giải thích lý do tại sao phải phục hồi môi trường tự nhiên.",
                "file": null
            },
            {
                "value": "비무장지대의 의미와 보존의 중요성을 강조하고 있다.",
                "value_translation": "Đang nhấn mạnh ý nghĩa của Khu phi quân sự và tầm quan trọng của việc bảo tồn.",
                "file": null
            },
            {
                "value": "멸종 위기의 동식물을 지킬 수 있는 방법을 제시하고 있다.",
                "value_translation": "Đang đề xuất các phương pháp có thể bảo vệ động thực vật có nguy cơ tuyệt chủng.",
                "file": null
            },
            {
                "value": "전쟁과 무기 사용이 가져온 자연 파괴 현상을 비판하고 있다.",
                "value_translation": "Đang phê phán hiện tượng phá hủy thiên nhiên do chiến tranh và việc sử dụng vũ khí gây ra.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 51. 다음 글의 ㉠과 ㉡에 알맞은 말을 각각 쓰시오.",
        "title_translation": "Câu 51. Hãy viết những lời phù hợp vào ㉠ và ㉡ trong đoạn văn sau.",
        "audio_file": null,
        "explain": "㉠ 드리고자 합니다/드리려고 합니다/드리겠습니다\r\n㉡ 가능합니다/할 수 있습니다",
        "explain_translation": "㉠ Tôi muốn gửi/Tôi dự định gửi/Tôi sẽ gửi \r\n㉡ Có thể/Có khả năng",
        "image_file": "question_51.jpg",
        "type": "Writing",
        "correct_index": -1,
        "answers": [],
        "score": 10
    },
    {
        "title": "Câu 52. 다음 글의 ㉠과 ㉡에 알맞은 말을 각각 쓰시오.\n사람들이 많이 기르는 동물인 개와 고양이는 특성이 매우 다르다. 개는 주인의 행동에 신경을 쓰고 주인의 사랑을 받기 위해 다양한 행동을 한다. 개가 꼬리를 흔들거나 매달리는 것은 주인의 (   ㉠   ) 행동이다. 반면에 고양이는 주인에게 전혀 신경을 쓰지 않는다. 혼자서 장난을 치거나 낮잠을 자면서 자기만의 (   ㉡   ) 것이 고양이의 일상이다.",
        "title_translation": "Câu 52. Hãy viết những lời phù hợp vào ㉠ và ㉡ trong đoạn văn sau.\nChó và mèo, những loài động vật mà con người nuôi nhiều, có đặc điểm rất khác nhau. Chó chú ý đến hành động của chủ và thực hiện nhiều hành động khác nhau để nhận được tình yêu thương của chủ. Việc chó vẫy đuôi hay bám lấy chủ là hành động ( ㉠ ). Ngược lại, mèo hoàn toàn không để ý đến chủ. Việc mèo tự mình chơi đùa hoặc ngủ trưa và tận hưởng ( ㉡ ) của riêng mình chính là cuộc sống hàng ngày của chúng.",
        "audio_file": null,
        "explain": "㉠ 사랑을 받기 위한/관심을 끌기 위한\r\n㉡ 시간(공간)을 즐기는/세계를 살아가는",
        "explain_translation": "㉠ Để nhận được tình yêu/Để thu hút sự chú ý\r\n㉡ Thời gian (không gian) tận hưởng/Sống trong thế giới",
        "image_file": null,
        "type": "Writing",
        "correct_index": -1,
        "answers": [],
        "score": 10
    },
    {
        "title": "Câu 53. 다음은 성인과 초 • 중 • 고등학생을 대상으로 연간 독서을 실태를 조사한 결과이다. \n이 내용을 200〜300자의 글로 쓰시오. 단，글의 제목은 쓰지 마시오.",
        "title_translation": "Câu 53. Dưới đây là kết quả khảo sát thực trạng tỷ lệ đọc sách hàng năm đối với người lớn và học sinh tiểu học, trung học cơ sở, trung học phổ thông.\nHãy viết đoạn văn từ 200 đến 300 chữ dựa trên nội dung này. Tuy nhiên, không viết tiêu đề cho bài viết.",
        "audio_file": null,
        "explain": "성인과 학생을 대상으로 연간 독서율 실태를 조사한 결과, 종이책의 경우 성인은 2015년 65.3%에서 2017년 59.9%로 감소했으며 학생은 94.9%에서 91.7%로 감소한 것으로 나타났다. 반면에 전자책은 성인이 10.2%에서 14.1%로 증가하였고 학생은 27.1%에서 29.8%로 모두 증가하였다. 이 조사 결과에 따르면 성인과 학생 모두 독서할 때 종이책의 이용은 줄어들고 전자책 이용은 늘어났다는 것을 알 수 있다. (239자)",
        "explain_translation": "Theo kết quả khảo sát thực trạng tỷ lệ đọc sách hàng năm đối với người lớn và học sinh, trong trường hợp sách giấy, người lớn giảm từ 65,3% năm 2015 xuống 59,9% năm 2017 và học sinh giảm từ 94,9% xuống 91,7%. Ngược lại, sách điện tử ở người lớn tăng từ 10,2% lên 14,1% và học sinh tăng từ 27,1% lên 29,8%. Theo kết quả khảo sát này, có thể thấy việc sử dụng sách giấy khi đọc sách ở cả người lớn và học sinh đều giảm đi và việc sử dụng sách điện tử đang tăng lên. (239 chữ)",
        "image_file": "question_53.jpg",
        "type": "Writing",
        "correct_index": -1,
        "answers": [],
        "score": 30
    },
    {
        "title": "Câu 54. 다음을 참고하여 600 〜700자로 글을 쓰시오. 단，문제를 그대로 옮겨 쓰지 마시오. \n학교에서 받는 정규 교육을 제외하고 일반인들이 삶의 질을 향상시키기 위해 자기 주도적으로 학습을 하는 것을 평생교육이라고 말할 수 있다. 이러한 평생 교육에 관한 목적과 형태에 관하여 아래의 내용을 중심으로 자신의 생각을 쓰시오.\n· 평생교육의 목적이 무엇이라고 생각하는가?\n· 평생교육의 종류는 무엇이 있는가?\n· 평생교육이 필요한 이유는 무엇인가?",
        "title_translation": "Câu 54. Tham khảo nội dung sau để viết bài luận từ 600 đến 700 chữ. Tuy nhiên, không được chép lại nguyên văn câu hỏi.\nNgoại trừ giáo dục chính quy nhận được ở trường học, việc những người bình thường tự chủ động học tập để nâng cao chất lượng cuộc sống có thể được gọi là giáo dục suốt đời. Dựa trên nội dung dưới đây, hãy viết suy nghĩ của bản thân về mục đích và hình thức của giáo dục suốt đời này.\n· Bạn nghĩ mục đích của giáo dục suốt đời là gì?\n· Có những loại giáo dục suốt đời nào?\n· Tại sao giáo dục suốt đời lại cần thiết?",
        "audio_file": null,
        "explain": "평생교육은 학교를 졸업한 뒤에도 자신의 필요와 목표에 따라 계속 배우는 교육을 의미한다. 즉, 정해진 교육 과정을 따르는 학교 교육과 달리 스스로 배우고 싶은 내용을 선택하여 꾸준히 학습하는 것이다. 학교 교육은 일정한 나이가 되면 누구나 받아야 하는 의무 교육이지만, 평생교육은 개인의 관심과 필요에 따라 자발적으로 이루어진다는 점에서 차이가 있다. 평생교육의 가장 큰 목적은 자신의 능력을 향상시키고 더 나은 삶을 만드는 데 있다. 새로운 기술을 익혀 직업을 바꾸거나 취업 경쟁력을 높일 수도 있고, 운동이나 외국어, 악기와 같은 취미 활동을 통해 삶의 만족감을 높일 수도 있다. 또한 빠르게 변화하는 사회에 적응하기 위해 새로운 지식과 정보를 계속 배우는 것도 중요한 이유이다. 평생교육은 대학, 평생교육원, 문화센터 등에서 직접 수업을 듣는 방식도 있고, 인터넷을 이용해 시간과 장소에 상관없이 온라인으로 배우는 방법도 있다. 이처럼 평생교육은 다양한 형태로 누구나 쉽게 참여할 수 있으며, 나이나 직업에 관계없이 계속할 수 있다는 장점이 있다. 사람은 학교를 졸업했다고 해서 모든 것을 다 배운 것이 아니다. 사회는 끊임없이 변하고 새로운 지식도 계속 생겨나기 때문에 평생 배우려는 자세가 필요하다. 따라서 평생교육은 개인의 성장뿐만 아니라 더 나은 미래를 준비하기 위해 반드시 필요한 과정이라고 생각한다.",
        "explain_translation": "Học tập suốt đời đề cập đến việc học tập tiếp tục theo nhu cầu và mục tiêu cá nhân ngay cả sau khi tốt nghiệp trung học. Nói cách khác, không giống như giáo dục phổ thông tuân theo chương trình học cố định, học tập suốt đời bao gồm việc lựa chọn nội dung muốn học và học tập liên tục. Trong khi giáo dục phổ thông là bắt buộc đối với mọi người khi đến một độ tuổi nhất định, học tập suốt đời khác biệt ở chỗ nó được thực hiện một cách tự nguyện dựa trên sở thích và nhu cầu cá nhân. Mục đích chính của học tập suốt đời là nâng cao khả năng và tạo dựng một cuộc sống tốt đẹp hơn. Người ta có thể thay đổi nghề nghiệp hoặc tăng khả năng cạnh tranh trên thị trường lao động bằng cách trau dồi kỹ năng mới, hoặc tăng sự hài lòng trong cuộc sống thông qua các sở thích như tập thể dục, ngoại ngữ hoặc chơi nhạc cụ. Hơn nữa, việc liên tục học hỏi kiến ​​thức và thông tin mới để thích ứng với một xã hội thay đổi nhanh chóng là một lý do quan trọng khác. Học tập suốt đời có thể diễn ra thông qua các lớp học trực tiếp tại các trường đại học, trung tâm giáo dục thường xuyên hoặc trung tâm văn hóa, hoặc thông qua học trực tuyến trên internet, cho phép người ta học bất cứ lúc nào và bất cứ nơi đâu. Do đó, học tập suốt đời mang lại lợi thế là dễ dàng tiếp cận với bất kỳ ai dưới nhiều hình thức khác nhau và có thể được tiếp tục bất kể tuổi tác hay nghề nghiệp. Tốt nghiệp trung học không có nghĩa là người ta đã học được tất cả mọi thứ. Vì xã hội luôn thay đổi và kiến ​​thức mới liên tục xuất hiện, thái độ học tập suốt đời là điều cần thiết. Do đó, tôi tin rằng học tập suốt đời là một quá trình thiết yếu không chỉ cho sự phát triển cá nhân mà còn để chuẩn bị cho một tương lai tốt đẹp hơn.",
        "image_file": null,
        "type": "Writing",
        "correct_index": -1,
        "answers": [],
        "score": 50
    },
    {
        "title": "Câu 55. (       )에 들어갈 가장 알맞은 것을 고르십시오. \n뒤에서 누군가 내 어깨를 (       ) 가방을 떨어뜨렸어요.",
        "title_translation": "Câu 55. Chọn từ phù hợp nhất điền vào ( ).\nĐã có ai đó ở phía sau ( ) đôi vai tôi nên tôi đã làm rơi túi xách.",
        "audio_file": null,
        "explain": "가방을 떨어뜨린 이유를 말하고 있으므로 ④가 답이 된다.",
        "explain_translation": "Vì đang nói lý do làm rơi túi xách nên câu trả lời ④ là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "치기 위해서",
                "value_translation": "Để va vào",
                "file": null
            },
            {
                "value": "치기 때문에",
                "value_translation": "Vì va vào",
                "file": null
            },
            {
                "value": "치는 것처럼",
                "value_translation": "Như thể va vào",
                "file": null
            },
            {
                "value": "치는 바람에",
                "value_translation": "Do va vào (kết quả không mong muốn)",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 56. (           )에 들어갈 가장 알맞은 것을 고르십시오. \n어제 본 영화가 너무 재미없어서 계속 (              ).",
        "title_translation": "Câu 56. Chọn từ phù hợp nhất điền vào ( ).\nBộ phim hôm qua tôi xem chán quá nên tôi cứ ( ) suốt.",
        "audio_file": null,
        "explain": "영화가 재미없어서 졸았다는 의미로 한 가지 행동만 할 때 사용하는 표현인 ③이 답이 된다.",
        "explain_translation": "Câu trả lời ③ là đúng, đây là biểu thức được sử dụng khi chỉ thực hiện một hành động duy nhất với ý nghĩa là đã ngủ gật vì bộ phim không hay.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "졸기는요 ",
                "value_translation": "Ngủ gật gì mà ngủ gật",
                "file": null
            },
            {
                "value": "졸기로 했어요",
                "value_translation": "Đã quyết định ngủ gật",
                "file": null
            },
            {
                "value": "졸기만 했어요",
                "value_translation": "Chỉ toàn ngủ gật",
                "file": null
            },
            {
                "value": "졸예정이에요",
                "value_translation": "Dự định sẽ ngủ gật",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 57. 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오. \n이 서류는 급하니까 오늘 저녁까지 *끝낼 수 있게* 서둘러 주세요.",
        "title_translation": "Câu 57. Chọn phần có ý nghĩa gần nhất với phần gạch chân.\nHồ sơ này đang gấp nên hãy khẩn trương *để có thể kết thúc* vào tối nay.",
        "audio_file": null,
        "explain": "서류가 급하니까 오늘 저녁까지 끝내는 것이 의도이자 목표를 나타내는 표현인 ④가 답이 된다.",
        "explain_translation": "Vì hồ sơ đang gấp nên câu trả lời ④ là đúng, đây là biểu thức thể hiện ý định và mục tiêu hoàn thành vào tối nay.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "끝낼 텐데",
                "value_translation": "Chắc là sẽ xong",
                "file": null
            },
            {
                "value": "끝낼 뻔하게",
                "value_translation": "Suýt chút nữa là xong",
                "file": null
            },
            {
                "value": "끝낸다고 해도",
                "value_translation": "Dù nói là sẽ xong",
                "file": null
            },
            {
                "value": "끝낼 수 있도록",
                "value_translation": "Để có thể hoàn thành",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 58. 밑줄 친 부분과 의미가 가장 비슷한 것을 고르십시오. \n신제품이 *나왔다고 해서* 사러 갔는데 벌써 다 팔리고 없었어요.",
        "title_translation": "Câu 58. Chọn phần có ý nghĩa gần nhất với phần gạch chân.\n*Nghe nói là* có sản phẩm mới ra nên tôi đã đi mua nhưng nó đã bán hết sạch rồi.",
        "audio_file": null,
        "explain": "신제품이 나왔다는 말을 듣고 사로 갔다는 의미이므로 간접화법과 이유 원인을 나타내는 표현인 ①이 답이 된다.",
        "explain_translation": "Vì có nghĩa là nghe nói có sản phẩm mới nên đã đi mua, nên câu trả lời ① là đúng, đây là biểu thức thể hiện cách nói gián tiếp và nguyên nhân lý do.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "나왔다기에",
                "value_translation": "Vì nghe nói là đã ra mắt",
                "file": null
            },
            {
                "value": "나오려다가",
                "value_translation": "Định ra mắt rồi lại thôi",
                "file": null
            },
            {
                "value": "나왔더라면",
                "value_translation": "Nếu như đã ra mắt",
                "file": null
            },
            {
                "value": "나오나마나",
                "value_translation": "Dù có ra mắt hay không",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 59. 다음은 무엇에 대한 글인지 고르십시오.",
        "title_translation": "Câu 59. Chọn xem đoạn văn sau nói về cái gì.",
        "audio_file": null,
        "explain": "눈을 지켜 드린다고 했으므로 ④가 답이 된다.",
        "explain_translation": "Vì đã nói là sẽ bảo vệ đôi mắt nên câu trả lời ④ là đúng.",
        "image_file": "question_59.jpg",
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "거울",
                "value_translation": "Gương",
                "file": null
            },
            {
                "value": "안약",
                "value_translation": "Thuốc nhỏ mắt",
                "file": null
            },
            {
                "value": "모자",
                "value_translation": "Mũ",
                "file": null
            },
            {
                "value": "안경",
                "value_translation": "Kính mắt",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 60. 다음은 무엇에 대한 글인지 고르십시오. ",
        "title_translation": "Câu 60. Chọn xem đoạn văn sau nói về cái gì.",
        "audio_file": null,
        "explain": "행복한 순간을 오래 기억한다는 말이 있으므로 ②가 답이 된다.",
        "explain_translation": "Vì có câu nói về việc ghi nhớ khoảnh khắc hạnh phúc lâu dài nên câu trả lời ② là đúng.",
        "image_file": "question_60.jpg",
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "박물관",
                "value_translation": "Bảo tàng",
                "file": null
            },
            {
                "value": "사진관",
                "value_translation": "Tiệm chụp ảnh",
                "file": null
            },
            {
                "value": "미용실",
                "value_translation": "Tiệm làm tóc",
                "file": null
            },
            {
                "value": "영화관",
                "value_translation": "Rạp chiếu phim",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 61. 다음은 무엇에 대한 글인지 고르십시오. ",
        "title_translation": "Câu 61. Chọn xem đoạn văn sau nói về cái gì.",
        "audio_file": null,
        "explain": "전시장 안에서 마스크를 착용하고 관람 거리를 유지해 달라는 주의 사항을 의미하므로 ②가 답이 된다.",
        "explain_translation": "Vì đoạn văn đề cập đến các lưu ý như phải đeo khẩu trang bên trong phòng triển lãm và duy trì khoảng cách khi tham quan nên đáp án là ②.",
        "image_file": "question_61.jpg",
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "전시설명",
                "value_translation": "Thuyết minh triển lãm",
                "file": null
            },
            {
                "value": "주위 사항",
                "value_translation": "Các lưu ý",
                "file": null
            },
            {
                "value": "장소 안내",
                "value_translation": "Hướng dẫn địa điểm",
                "file": null
            },
            {
                "value": "사용 방법",
                "value_translation": "Cách sử dụng",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 62. 다음은 무엇에 대한 글인지 고르십시오. ",
        "title_translation": "Câu 62. Chọn xem đoạn văn sau nói về cái gì.",
        "audio_file": null,
        "explain": "무대라는 말이 있고 일시와 장소가 나와 있으므로 ③이 답이 된다.",
        "explain_translation": "Vì có từ 'sân khấu' và có ghi thời gian cũng như địa điểm nên đáp án là ③.",
        "image_file": "question_62.jpg",
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "도서 소개",
                "value_translation": "Giới thiệu sách",
                "file": null
            },
            {
                "value": "작가 소개",
                "value_translation": "Giới thiệu tác giả",
                "file": null
            },
            {
                "value": "공연 안내",
                "value_translation": "Hướng dẫn buổi diễn",
                "file": null
            },
            {
                "value": "행사 일정",
                "value_translation": "Lịch trình sự kiện",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 63. 다음 글 또는 그래프의 내용과 같은 것을 고르십시오. ",
        "title_translation": "Câu 63. Chọn nội dung giống với đoạn văn hoặc biểu đồ sau.",
        "audio_file": null,
        "explain": "접수 방법에 홈페이지 및 학생처라고 되어 있으므로 ①이 답이 된다.",
        "explain_translation": "Vì phương thức tiếp nhận hồ sơ có ghi là trên trang chủ và tại phòng công tác sinh viên nên đáp án là ①.",
        "image_file": "question_63.jpg",
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "온라인과 방문 접수 모두 가능하다.",
                "value_translation": "Có thể đăng ký trực tuyến hoặc đến nộp trực tiếp.",
                "file": null
            },
            {
                "value": "1월 한 달 동안 장학금을 신청할 수 있다.",
                "value_translation": "Có thể đăng ký học bổng trong suốt tháng 1.",
                "file": null
            },
            {
                "value": "장학생으로 선발되면 1년간 학비를 받는다.",
                "value_translation": "Nếu được chọn nhận học bổng, sinh viên sẽ được nhận học phí trong 1 năm.",
                "file": null
            },
            {
                "value": "대학에 다니고 있는 사람만 신청할 수 있다.",
                "value_translation": "Chỉ những người đang học đại học mới có thể đăng ký.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 64. 다음 글 또는 그래프의 내용과 같은 것을 고르십시오. ",
        "title_translation": "Câu 64. Chọn nội dung giống với đoạn văn hoặc biểu đồ sau.",
        "audio_file": null,
        "explain": "출퇴근 시 스마트폰 이용과 메신저를 가장 많이 하고 있으므로 ④가 답이 된다.",
        "explain_translation": "Biểu đồ cho thấy việc sử dụng điện thoại thông minh để nhắn tin là hoạt động được thực hiện nhiều nhất khi đi làm và về nhà, nên đáp án là ④.",
        "image_file": "question_64.jpg",
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "스마트폰을 이용해 음악을 가장 많이 듣는다.",
                "value_translation": "Nghe nhạc là hoạt động được thực hiện nhiều nhất bằng điện thoại thông minh.",
                "file": null
            },
            {
                "value": "통근 시간을 활용하여 독서를 하는 사람이 가장 많다.",
                "value_translation": "Số người đọc sách tận dụng thời gian đi làm là nhiều nhất.",
                "file": null
            },
            {
                "value": "인터넷 검색보다 영화를 보거나 게임을 더 많이 한다.",
                "value_translation": "Xem phim hoặc chơi game nhiều hơn so với tìm kiếm trên internet.",
                "file": null
            },
            {
                "value": "출퇴근 시간에 스마트폰으로 메시지를 가장 많이 보낸다.",
                "value_translation": "Gửi tin nhắn bằng điện thoại thông minh là hoạt động nhiều nhất vào thời gian đi làm/về nhà.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 65. 다음 글 또는 그래프의 내용과 같은 것을 고르십시오. \n커피만큼 지속적으로 논란이 많은 식품도 드물다. 커피의 카페인이 불면증을 유발할 수 있다는 사실은 잘 알려져 있다. 반면에 항산화 성분도 있어 간암 예방에 도움이 될 뿐만 아니라 뼈 건강에도 좋은 영향을 준다는 연구 결과도 있다. 물론 이 경우는 아무것도 첨가하지 않은 블랙커피에 해당하며 하루에 1, 2잔을 초과하는 것은 좋지 않다. 또한 누구에게나 같은 효과를 얻는 것은 아니므로 자신의 신체적 특성을 고려해야 하는 것은 당연하다.",
        "title_translation": "Câu 65. Chọn nội dung giống với đoạn văn hoặc biểu đồ sau.",
        "audio_file": null,
        "explain": "뼈 건강에 좋은 영향을 주는 경우는 아무것도 첨가하지 않은 블랙커피라고 했으므로 ③이 답이 된다.",
        "explain_translation": "Đoạn văn có nói rằng trường hợp cà phê có ảnh hưởng tốt đến sức khỏe xương là loại cà phê đen không thêm bất cứ thứ gì, nên đáp án là ③.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "지금까지 논란이 계속되는 식품은 커피 외에도 많이 있다.",
                "value_translation": "Ngoài cà phê ra còn có nhiều loại thực phẩm khác vẫn đang gây tranh cãi cho đến nay.",
                "file": null
            },
            {
                "value": "커피의 카페인은 건강에 도움을 주는 성분 중의 하나이다.",
                "value_translation": "Caffeine trong cà phê là một trong những thành phần giúp ích cho sức khỏe.",
                "file": null
            },
            {
                "value": "아무것도 넣지 않은 블랙커피를 마시는 것이 건강에 이롭다.",
                "value_translation": "Uống cà phê đen không cho thêm bất cứ thứ gì sẽ có lợi cho sức khỏe.",
                "file": null
            },
            {
                "value": "간이나 뼈 건강을 위해 되도록 커피를 자주 마시는 것이 좋다.",
                "value_translation": "Tốt nhất là nên uống cà phê thường xuyên để bảo vệ sức khỏe gan hoặc xương.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 66. 다음 글 또는 그래프의 내용과 같은 것을 고르십시오. \n반려동물로 많이 키우는 고양이는 신비로운 신체적 특성을 가지고 있다. 고양이의 눈은 빛의 밝기에 따라 빠르게 열리고 닫히는 구조이며 사람보다 뛰어난 야간 시력을 가지고 있기 때문에 야간의 움직임에 자유롭다. 또한 수염은 좁은 공간을 통과하거나 대상과의 거리를 측정하는 등 감각 기관의 역할을 한다. 게다가 공기의 흐름이나 습도의 변화까지 감지하기 때문에 앞이 보이지 않더라도 자유롭게 돌아다닐 수 있는 것이다.",
        "title_translation": "Câu 66. Chọn nội dung giống với đoạn văn hoặc biểu đồ sau.",
        "audio_file": null,
        "explain": "앞이 보이지 않더라도 자유롭게 돌아다닐 수 있다고 했으므로 ①이 답이 된다.",
        "explain_translation": "Đoạn văn đề cập rằng mèo có thể đi lại tự do ngay cả khi không nhìn thấy phía trước (nhờ các cơ quan cảm giác khác), nên đáp án là ①.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "고양이는 어둠 속에서 움직이거나 활동하는 데에 자유롭다.",
                "value_translation": "Loài mèo có thể tự do di chuyển hoặc hoạt động trong bóng tối.",
                "file": null
            },
            {
                "value": "감각 기관 역할을 하는 수염은 대상의 무게도 감지할 수 있다.",
                "value_translation": "Ria mèo đóng vai trò là cơ quan cảm giác còn có thể cảm nhận được trọng lượng của vật thể.",
                "file": null
            },
            {
                "value": "고양이가 좁은 곳을 지날 수 있는 것은 신체의 유연함 때문이다.",
                "value_translation": "Việc mèo có thể đi qua những nơi hẹp là nhờ sự dẻo dai của cơ thể.",
                "file": null
            },
            {
                "value": "고양이의 털은 습도 변화를 느낄 수 있어 날씨에 매우 민감하다.",
                "value_translation": "Lông mèo có thể cảm nhận được sự thay đổi độ ẩm nên rất nhạy cảm với thời tiết.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 67. 다음을 순서에 맞게 배열한 것을 고르십시오.\n(가) 상대방을 설득할 때는 무조건 내 의견을 강조하거나 감정적으로 접근해서는 안 된다.\n(나) 사회생활을 하다가 보면 상대방과 의견 차이를 보일 때가 종종 생긴다.\n(다) 이럴 때 상대방이 나의 의견에 따라오도록 하는 기술이 설득이다.\n(라) 충분히 상대의 감정을 존중하고 이성을 움직이려는 논리적 설득이 이루어져야 한다.",
        "title_translation": "Câu 67. Chọn cách sắp xếp các câu sau theo đúng thứ tự.",
        "audio_file": null,
        "explain": "첫 문장으로 제시된 (가)와 (나)중에서 (나)로 시작하는 것이 좋으며 상대방과 의견 차이를 보일 때 필요한 설득에 대한 내용이므로 ②가 가장 자연스럽다.",
        "explain_translation": "Bắt đầu bằng câu (나) là tự nhiên nhất vì nó giới thiệu bối cảnh về sự khác biệt ý kiến; tiếp theo là (다) định nghĩa về sự thuyết phục, sau đó đến (가) và (라) đưa ra phương pháp thuyết phục đúng đắn, nên ② là phù hợp nhất.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "(가)-(다)-(나)-(라)",
                "value_translation": "(가)-(다)-(나)-(라)",
                "file": null
            },
            {
                "value": "(나)-(다)-(가)-(라)",
                "value_translation": "(나)-(다)-(가)-(라)",
                "file": null
            },
            {
                "value": "(가)-(라)-(나)-(다)",
                "value_translation": "(가)-(라)-(나)-(다)",
                "file": null
            },
            {
                "value": "(나)-(가)-(다)-(라)",
                "value_translation": "(나)-(가)-(다)-(라)",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 68. 다음을 순서에 맞게 배열한 것을 고르십시오. \n(가) 이렇게 뜨거운 열기를 이기지 못하고 일어나는 자동차 화재 사고는 큰 인명 피해로 이어질 수 있다.\n(나) 외부의 기온이 30도 이상이 되면 차량 내부의 온도는 최대 85도까지 올라가기 때문이다.\n(다) 한낮의 기온이 30도를 넘는 폭염이 계속되면 자동차 화재 사고가 자주 발생한다.\n(라) 따라서 폭발 위험이 있는 물건을 차에 두지 않는 등의 세심한 주의가 필요하다.",
        "title_translation": "Câu 68. Chọn cách sắp xếp các câu sau theo đúng thứ tự.",
        "audio_file": null,
        "explain": "첫 문장으로 제시된 (나)와 (다)중에서 (나)와 같이 ‘- 때문이다’의 문장은 첫 문장으로 시작되기 어려우며 더운 여름에 폭발 위험이 있는 물건을 차에 두면 안 된다는 내용이므로 ②가 가장 자연스럽다.",
        "explain_translation": "Câu (다) là câu mở đầu tốt nhất giới thiệu về hiện tượng cháy xe mùa nắng nóng; (나) giải thích nguyên nhân do nhiệt độ tăng cao, (가) nói về hậu quả và (라) đưa ra kết luận/lời khuyên, nên ② là tự nhiên nhất.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "(나)-(가)-(다)-(라)",
                "value_translation": "(나)-(가)-(다)-(라)",
                "file": null
            },
            {
                "value": "(다)-(나)-(가)-(라)",
                "value_translation": "(다)-(나)-(가)-(라)",
                "file": null
            },
            {
                "value": "(나)-(라)-(다)-(가)",
                "value_translation": "(나)-(라)-(다)-(가)",
                "file": null
            },
            {
                "value": "(다)-(가)-(나)-(라)",
                "value_translation": "(다)-(가)-(나)-(라)",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 69. 다음을 순서에 맞게 배열한 것을 고르십시오. \n(가) 이 해례본은 세종이 직접 한글을 만든 목적을 밝히고 있는 예의와 학자들이 만든 해설본인 해례로 구성되어 있다.\n(나) 더욱이 문자를 만든 원리와 어떻게 사용하는지를 설명한 해설서도 존재한다.\n(다) 훈민정음 해례본이 바로 그것이며 유네스코 세계기록유산으로 등록되어 있다.\n(라) 한글은 누가, 언제, 왜 만들었는지가 분명하게 밝혀져 있는 유일한 문자이다.",
        "title_translation": "Câu 69. Chọn cách sắp xếp các câu sau theo đúng thứ tự.",
        "audio_file": null,
        "explain": "첫 문장으로 제시된 (가)와 (라)중에서 (가)와 같이 지시어로 시작하는 문장은 첫 문장이 될 수 없으며 훈민정음 해례본에 대한 내용이므로 ④가 가장 자연스럽다.",
        "explain_translation": "Câu (라) giới thiệu Hangeul là chữ viết duy nhất rõ ràng về nguồn gốc; tiếp theo (나) nói về sự tồn tại của sách giải thích, (다) gọi tên cuốn sách đó là 'Huấn dân chính âm giải lệ bản', và (가) mô tả cấu trúc của bản này, nên ④ là phù hợp nhất.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "(가)-(나)-(다)-(라)",
                "value_translation": "(가)-(나)-(다)-(라)",
                "file": null
            },
            {
                "value": "(라)-(가)-(다)-(나)",
                "value_translation": "(라)-(가)-(다)-(나)",
                "file": null
            },
            {
                "value": "(가)-(다)-(라)-(나)",
                "value_translation": "(가)-(다)-(라)-(나)",
                "file": null
            },
            {
                "value": "(라)-(나)-(다)-(가)",
                "value_translation": "(라)-(나)-(다)-(가)",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 70. (           )에 들어갈 말로 가장 알맞은 것을 고르십시오. \n‘가는 말이 고와야 오는 말이 곱다'는 말이 있다. 이 말은 다른 사람에게 좋은 말이나 행동을 해야 상대방도 내게 같은 반응을 보인다는 의미이다. 기분 나쁜 말이나 상스러운 행동을 하면 그것은 (               ) 것이다. 좋은 친구를 얻고 싶다면 자신이 먼저 좋은 친구가 되어야 한다는 것은 두말할 필요가 없다. 따라서 남에게 대접을 받고 싶다면 내가 먼저 그 사람을 잘 대접해 주어야 하는 것이다.",
        "title_translation": "Câu 70. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "좋은 말을 하면 상대방도 내게 같은 반응을 보인다는 내용이므로 ④가 들어가야 자연스럽다.",
        "explain_translation": "Dựa trên câu tục ngữ 'Lời nói đi có đẹp thì lời nói đến mới đẹp', đoạn văn nhấn mạnh rằng nếu mình làm điều xấu thì kết quả xấu đó cũng sẽ quay lại với mình, nên ④ là đáp án tự nhiên nhất.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "되돌리기 어려운 실수를 하는",
                "value_translation": "phạm phải sai lầm khó có thể quay đầu",
                "file": null
            },
            {
                "value": "처음으로 다시 돌아가야 하는",
                "value_translation": "phải quay trở lại từ đầu",
                "file": null
            },
            {
                "value": "인간관계를 회복시킬 수 있는",
                "value_translation": "có thể hồi phục mối quan hệ nhân quả",
                "file": null
            },
            {
                "value": "그대로 나에게 다시 돌아오는",
                "value_translation": "nó sẽ quay trở lại với bản thân mình y như vậy",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 71. (           )에 들어갈 말로 가장 알맞은 것을 고르십시오. \n태풍의 이름을 처음 사용한 것은 호주의 예보관들이었다. 그들은 태풍에 자신이 싫어하는 정치인의 이름을 붙였다고 한다. 그 후 2000년부터 아시아 각국에서 태풍에 대한 관심을 높이고 (              ) 아시아 14개국에서 국가별로 10개씩의 이름을 제출하여 총 140개가 차례로 사용하고 있다. 이것을 다 사용하고 나면 다시 1번부터 시작을 하는데 유난히 큰 피해를 입힌 태풍의 이름은 합의를 거쳐 다른 이름으로 바꾸기도 한다.",
        "title_translation": "Câu 71. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "태풍에 이름을 붙이는 이유로 관심을 높이고 경계를 강화하자는 의미로 ①이 들어가야 자연스럽다.",
        "explain_translation": "Việc đặt tên cho bão nhằm mục đích nâng cao sự quan tâm và tăng cường cảnh giác đối với thiên tai, nên đáp án ① là phù hợp nhất.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "경계심을 강화하기 위해 ",
                "value_translation": "Để tăng cường sự cảnh giác",
                "file": null
            },
            {
                "value": "국가 간 친화의 목적으로",
                "value_translation": "Với mục đích thân thiện giữa các quốc gia",
                "file": null
            },
            {
                "value": "경쟁력을 향상시키기 위해",
                "value_translation": "Để nâng cao năng lực cạnh tranh",
                "file": null
            },
            {
                "value": "좋은 말을 전하는 차원에서",
                "value_translation": "Trên phương diện truyền tải những lời tốt đẹp",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 72. (             )에 들어갈 말로 가장 알맞은 것을 고르십시오. \n아침에 일어나기 어려운 사람들은 알람을 여러 개 맞춰 놓고 자는 경우가 있는데 알람을 끄고 다시 잠을 청하게 되면 하루를 (                      ). 또한 잠에서 깨어 바로 휴대폰을 확인하는 습관도 피해야 한다. 눈을 뜨자마자 휴대폰을 보는 행동은 뇌와 눈의 피로를 불러일으키게 되므로 바로 일어나 침구 정리나 가벼운 스트레칭을 하는 것이 좋다.",
        "title_translation": "Câu 72. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "알람을 들었지만 끄고 다시 잠을 자게 되면 하루를 피곤하게 시작할 수도 있다는 ①이 들어가야 다음 문장과 자연스럽게 이어진다",
        "explain_translation": "Việc tắt báo thức để ngủ tiếp sẽ làm gián đoạn chu kỳ thức dậy tự nhiên, khiến cơ thể mệt mỏi khi bắt đầu ngày mới, nên đáp án ① là phù hợp.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "피곤하게 시작하기 쉽다",
                "value_translation": "Dễ dàng bắt đầu một ngày mệt mỏi",
                "file": null
            },
            {
                "value": "잘못 계산하게 될 수 있다",
                "value_translation": "Có thể sẽ tính toán sai",
                "file": null
            },
            {
                "value": "휴대폰과 함께하는 것이다",
                "value_translation": "Là việc đồng hành cùng điện thoại di động",
                "file": null
            },
            {
                "value": "건강하게 지내는 방법이다",
                "value_translation": "Là phương pháp sống khỏe mạnh",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 73. 다음을 읽고 물음에 답하십시오. \n선물을 받는다는 것은 언제나 기분 좋은 일이다. 더욱이 자신에게 꼭 필요한 물건을 선물로 받으면 더 감동일 것이다. 그러나 (              ) 말처럼 때로는 내용물보다 포장이 더 과한 경우도 있다. 선물을 돋보이게 하기 위해 값비싼 포장지에 꽃이나 리본 등으로 화려하게 장식을 하는 것이다. 내용물이 먼저인지 포장이 먼저인지 착각이 들 정도의 과한 포장보다 상대방을 생각하는 마음과 정성이 담긴 선물로 준비하는 것이 좋다.\n(                )에 들어갈 말로 가장 알맞은 것을 고르십시오. ",
        "title_translation": "Câu 73. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "내용물보다 포장이 더 화려하고 비싼 비용이 들어가는 경우이므로 ①이 들어가야 자연스럽다.",
        "explain_translation": "Đoạn văn mô tả việc đóng gói quà quá tốn kém và rực rỡ so với giá trị thực của món quà bên trong, tương ứng với câu tục ngữ 'Cái rốn lớn hơn cái bụng', nên đáp án là ①.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "배보다 배꼽이 더 크다는",
                "value_translation": "Cái rốn còn lớn hơn cái bụng",
                "file": null
            },
            {
                "value": "같은 값이면 다홍치마라는",
                "value_translation": "Cùng một giá tiền thì chọn váy đỏ (Của rẻ là của ôi)",
                "file": null
            },
            {
                "value": "고래 싸움에 새우등 터진다는",
                "value_translation": "Trâu bò húc nhau ruồi muỗi chết (Cá lớn nuốt cá bé)",
                "file": null
            },
            {
                "value": "말 한마디로 천 냥 빚을 갚는다는",
                "value_translation": "Lời nói gói vàng",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 74. 윗글의 주제로 가장 알맞은 것을 고르십시오. ",
        "title_translation": "Câu 74. Chọn chủ đề phù hợp nhất của đoạn văn trên.",
        "audio_file": null,
        "explain": "과한 포장보다 상대를 생각하는 마음과 정성이 담긴 선물을 준비하자는 내용이므로 ④가 답이 된다.",
        "explain_translation": "Chủ đề chính của bài viết là phê phán việc đóng gói quá mức và nhấn mạnh rằng sự chân thành bên trong món quà mới là quan trọng nhất, nên đáp án là ④.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "아름다운 포장은 선물의 의미를 더욱 돋보이게 만든다.",
                "value_translation": "Bao bì đẹp làm cho ý nghĩa của món quà thêm nổi bật.",
                "file": null
            },
            {
                "value": "내용물도 중요하지만 선물 포장을 잘 하는 것도 필요하다.",
                "value_translation": "Nội dung cũng quan trọng nhưng việc đóng gói quà tốt cũng cần thiết.",
                "file": null
            },
            {
                "value": "받는 사람이 꼭 필요한 선물을 고르는 일은 어려운 일이다.",
                "value_translation": "Việc chọn món quà mà người nhận thực sự cần là một việc khó khăn.",
                "file": null
            },
            {
                "value": "선물은 화려한 포장보다 정성이 담긴 내용물이 더 중요하다.",
                "value_translation": "Món quà thì nội dung chứa đựng sự chân thành quan trọng hơn bao bì rực rỡ.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 75. 다음을 읽고 물음에 답하십시오. \n장수의 비결로 가장 많이 거론되는 것이 소식과 채식 위주의 식습관이다. 실제 곤충이나 쥐 등의 다양한 동물에서 음식을 적게 먹거나 칼로리를 제한했을 때 수명을 연장시키는 효과가 있다는 것이 확인되었다. 적게 먹으면 혈관을 젊게 유지시켜 노화를 늦추는 효과가 있다는 연구 결과도 있다. 혈관이 젊어지면 치매나 암에 걸릴 확률이 줄어든다는 것이다. 그러나 평소의 활동량과 상관없    （                 ） 칼로리를 줄인다거나 적게 먹는 것은 좋지 않다. 자신의 신체 리듬에 맞는 식습관을 갖는 것이 건강하게 사는 비결이라고 할 수 있다.\n(                )에 들어갈 말로 가장 알맞은 것을 고르십시오. ",
        "title_translation": "Câu 75. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "평소의 활동량을 생각하지 않고 무조건 적게 먹는 것은 좋지 않다는 내용이므로 ③이 들어가야 자연스럽다.",
        "explain_translation": "Đoạn văn khuyên rằng không nên ăn ít hoặc giảm calo một cách mù quáng/vô điều kiện mà không tính đến lượng vận động của bản thân, nên đáp án là ③.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "다행히",
                "value_translation": "May thay",
                "file": null
            },
            {
                "value": "도대체",
                "value_translation": "Rốt cuộc",
                "file": null
            },
            {
                "value": "무조건",
                "value_translation": "Vô điều kiện",
                "file": null
            },
            {
                "value": "도무지",
                "value_translation": "Hoàn toàn",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 76. 윗글의 내용과 같은 것을 고르십시오. ",
        "title_translation": "Câu 76. Chọn nội dung giống với đoạn văn trên.",
        "audio_file": null,
        "explain": "자신의 활동량과 신체 리듬에 맞는 식습관을 갖는 것이 건강의 비결이라고 했으므로 ②가 답이 된다.",
        "explain_translation": "Bài viết nhấn mạnh tầm quan trọng của việc điều chỉnh thói quen ăn uống sao cho phù hợp với nhịp sinh học và mức độ hoạt động của mỗi người, nên đáp án là ②.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "수명 연장에 대한 연구는 확실하게 입증된 것이 없다.",
                "value_translation": "Chưa có nghiên cứu nào về việc kéo dài tuổi thọ được chứng minh rõ ràng.",
                "file": null
            },
            {
                "value": "자신의 활동량에 맞게 식습관을 조절하는 것이 중요하다.",
                "value_translation": "Việc điều chỉnh thói quen ăn uống phù hợp với lượng vận động của bản thân là rất quan trọng.",
                "file": null
            },
            {
                "value": "적게 먹고 많이 움직이는 것이 건강한 삶을 만들어 준다.",
                "value_translation": "Ăn ít và vận động nhiều sẽ tạo nên một cuộc sống khỏe mạnh.",
                "file": null
            },
            {
                "value": "채식 위주 식단은 혈관을 젊게 만들어 노화를 막아 준다.",
                "value_translation": "Thực đơn tập trung vào rau củ làm cho mạch máu trẻ lại và ngăn ngừa lão hóa.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 77. 다음을 읽고 물음에 답하십시오. \n겨울은 군고구마의 계절이다. 어렸을 적 아버지가 퇴근길에 사다 주시던 종이 봉지에 담긴 따끈한 군고구마는 그야말로 천상의 맛이었다. 찌거나 삶아도 맛있지만 고구마는 역시 구워야 제맛이다. 추운 겨울에 손을 호호 불며 군고구마의 껍질을 벗겨서 먹으면 혀에 닿는 달달하고 부드러운 그 맛이 일품이다. 지금은 도심의 거리에서 찾아보기 힘들지만 전통시장에 가면 아직도 커다란 양철통을 개조해서 만든 군고구마 수레를 만날 수 있다. *집에서 편하게 구워 먹는 것보다 시장의 군고구마 장수에게 사 먹는 고구마가 더 맛있게 느껴지는 건 아마도 어린 시절로 돌아가고픈 작은 바람이 숨어 있는 건 아닐까.*\n밑줄 친 부분에 나타난 ‘나’의 심정으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 77. Chọn tâm trạng của 'tôi' được thể hiện ở phần gạch chân.",
        "audio_file": null,
        "explain": "군고구마로 인해 어린 시절로 돌아가고 싶은 바람이 숨어 있다고 했으므로 ①이 답이 된다.",
        "explain_translation": "Phần gạch chân nói về mong muốn được quay lại thời thơ ấu thông qua việc mua khoai lang nướng ở chợ, thể hiện nỗi nhớ nhung về quá khứ, nên đáp án là ①.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "그립다 ",
                "value_translation": "Nhớ nhung",
                "file": null
            },
            {
                "value": "답답하다",
                "value_translation": "Ngột ngạt/Bế tắc",
                "file": null
            },
            {
                "value": "속상하다",
                "value_translation": "Đau lòng/Buồn bã",
                "file": null
            },
            {
                "value": "감격스럽다",
                "value_translation": "Cảm động",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 78. 윗글의 내용과 같은 것을 고르십시오. ",
        "title_translation": "Câu 78. Chọn nội dung giống với đoạn văn trên.",
        "audio_file": null,
        "explain": "‘어릴 적 아버지가 퇴근길에 사다 주시던’의 경험을 말하고 있으므로 ②가 답이 된다.",
        "explain_translation": "Đoạn văn kể lại kỷ niệm về việc người cha thường mua khoai lang nướng về cho người con khi đi làm về, nên đáp án là ②.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "최근에는 고구마를 구워서 파는 곳을 찾기가 어렵다.",
                "value_translation": "Gần đây khó có thể tìm thấy nơi bán khoai lang nướng.",
                "file": null
            },
            {
                "value": "아버지는 어린 나를 위해 군고구마를 종종 사 오셨다.",
                "value_translation": "Cha thường xuyên mua khoai lang nướng về cho tôi khi tôi còn nhỏ.",
                "file": null
            },
            {
                "value": "고구마는 영양이 풍부하고 맛있어서 아이들이 좋아한다.",
                "value_translation": "Khoai lang giàu dinh dưỡng và ngon nên trẻ em thích.",
                "file": null
            },
            {
                "value": "시장에서 사 먹는 군고구마의 맛은 예전보다 맛이 없다.",
                "value_translation": "Vị của khoai lang nướng mua ở chợ không ngon bằng ngày xưa.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 79. 다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오. \n전국 흐리고 산발적 가을비, 낮에도 선선",
        "title_translation": "Câu 79. Chọn giải thích đúng nhất cho tiêu đề bài báo sau: 'Cả nước mây mù, mưa thu rải rác, ban ngày cũng mát mẻ'.",
        "audio_file": null,
        "explain": "‘산발적’은 ‘가끔씩’이라는 의미이고 ‘선선’은 시원한 느낌을 준다는 의미이므로 ④가 답이 된다.",
        "explain_translation": "Từ 'rải rác' có nghĩa là mưa thỉnh thoảng mới rơi và 'mát mẻ' mô tả thời tiết dễ chịu chứ không quá nóng hay quá lạnh, nên đáp án là ④.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "전국이 흐리고 계속 내리는 가을비가 그치면 추워질 것이다.",
                "value_translation": "Cả nước mây mù và nếu cơn mưa thu kéo dài tạnh đi thì trời sẽ trở lạnh.",
                "file": null
            },
            {
                "value": "전국이 흐리고 계속 비가 내려 낮에도 날씨가 쌀쌀할 것이다.",
                "value_translation": "Cả nước mây mù và mưa tiếp tục rơi nên thời tiết ban ngày sẽ se lạnh.",
                "file": null
            },
            {
                "value": "전국이 흐리고 가끔씩 내리는 가을비로 인해 낮에도 추울 것이다.",
                "value_translation": "Cả nước mây mù và do mưa thu thỉnh thoảng rơi nên ban ngày cũng sẽ lạnh.",
                "file": null
            },
            {
                "value": "전국이 흐리고 가끔씩 가을비가 내리겠으며 낮에도 시원할 것이다.",
                "value_translation": "Cả nước mây mù và mưa thu sẽ rơi thỉnh thoảng, ban ngày cũng sẽ mát mẻ.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 80. 다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오. \n한물간 캠핑 열기, 박람회 썰렁",
        "title_translation": "Câu 80. Chọn giải thích đúng nhất cho tiêu đề bài báo sau: 'Cơn sốt camping đã qua thời hoàng kim, hội chợ đìu hiu'.",
        "audio_file": null,
        "explain": "‘한물가다’는 말은 인기가 떨어지다는 의미이며 ‘썰렁’은 사람이 별로 없다는 말이므로 ①이 답이 된다.",
        "explain_translation": "Cụm từ 'qua thời hoàng kim' ám chỉ sức hút đã giảm đi và 'đìu hiu' có nghĩa là vắng vẻ, ít người qua lại, nên đáp án là ①.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "캠핑의 인기가 떨어져서 캠핑 박람회에도 사람이 별로 없어 한산하다.",
                "value_translation": "Vì sự yêu thích camping giảm sút nên tại hội chợ camping cũng không có mấy người và vắng vẻ.",
                "file": null
            },
            {
                "value": "캠핑의 열기가 뜨거워졌지만 캠핑 박람회를 찾는 사람들은 많지 않다.",
                "value_translation": "Cơn sốt camping đã trở nên nóng hổi nhưng số người tìm đến hội chợ camping không nhiều.",
                "file": null
            },
            {
                "value": "캠핑의 인기가 계속 올라가면서 캠핑 박람회에 사람들이 붐비고 있다.",
                "value_translation": "Khi sự yêu thích camping tiếp tục tăng lên, hội chợ camping đang trở nên đông đúc người.",
                "file": null
            },
            {
                "value": "시들었던 캠핑 열기를 다시 되돌리기 위해 박람회를 개최할 예정이다.",
                "value_translation": "Dự kiến sẽ tổ chức hội chợ để khôi phục lại cơn sốt camping đã nguội lạnh.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 81. 다음 신문 기사의 제목을 가장 잘 설명한 것을 고르십시오.\n동절기 조류 독감 재확산, 방역 대책 시급",
        "title_translation": "Câu 81. Chọn giải thích đúng nhất cho tiêu đề bài báo sau: 'Cúm gia cầm tái bùng phát trong mùa đông, các biện pháp phòng dịch đang rất cấp bách'.",
        "audio_file": null,
        "explain": "‘동절기’는 겨울을 말하며 명사 앞에 ‘재’가 붙으면 ‘다시’라는 의미이므로 ③이 답이 된다.",
        "explain_translation": "'Mùa đông' (동절기) chỉ mùa đông và khi thêm tiền tố 'tái' (재) trước danh từ thì có nghĩa là 'lại một lần nữa', vì vậy đáp án là ③.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "겨울철 조류 독감 확산을 방지하기 위해 방역을 서둘러야 한다.",
                "value_translation": "Phải khẩn trương phòng dịch để ngăn chặn sự lây lan của cúm gia cầm vào mùa đông.",
                "file": null
            },
            {
                "value": "날씨가 추워지면서 조류 독감이 발생해 신속하게 방역을 완료했다.",
                "value_translation": "Cúm gia cầm phát sinh khi thời tiết trở lạnh và công tác phòng dịch đã nhanh chóng hoàn tất.",
                "file": null
            },
            {
                "value": "겨울철 조류 독감이 다시 확산되면서 방역 대책이 시급한 실정이다.",
                "value_translation": "Tình hình hiện nay là các biện pháp phòng dịch đang rất cấp bách khi cúm gia cầm tái bùng phát vào mùa đông.",
                "file": null
            },
            {
                "value": "날씨가 추워지면 조류 독감이 확산될 우려가 있어 방역이 필요하다.",
                "value_translation": "Cần phải phòng dịch vì lo ngại cúm gia cầm sẽ lây lan khi thời tiết trở lạnh.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 82. (                )에 들어갈 말로 가장 알맞은 것을 고르십시오. \n문화체육관광부는 산업 구조의 변화와 국제적 경제 위기 등으로 어려움을 겪고 있는 청년 문화 예술인들을 위해 ‘청년의 삶 개선 방안’을 확대한다고 발표했다. 이 방안을 살펴보면 청년 고용 및 일자리 증대를 통해 청년들의 (         ) 중점을 두고 있다. 또한 지역 청년 문화 활동가， 문화 관련 전공자들이 지역 문화 전문가로서 성장하고 발전할 수 있도록 지원할 계획이라고 밝히고 있다.",
        "title_translation": "Câu 82. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "삶을 개선하다는 말은 현재보다 좋아지게 만든다는 의미이므로 ④가 들어가야 자연스럽다.",
        "explain_translation": "Vì cụm từ 'cải thiện cuộc sống' có nghĩa là làm cho nó trở nên tốt hơn hiện tại, nên đáp án ④ là tự nhiên nhất.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "소통 공간을 제공하는 데에",
                "value_translation": "vào việc cung cấp không gian giao tiếp",
                "file": null
            },
            {
                "value": "여가 생활을 지원하는 부분에",
                "value_translation": "vào phần hỗ trợ đời sống giải trí",
                "file": null
            },
            {
                "value": "주거 지역을 확대시키는 것에",
                "value_translation": "vào việc mở rộng khu vực cư trú",
                "file": null
            },
            {
                "value": "문화적 삶을 향상시키는 데에",
                "value_translation": "vào việc nâng cao đời sống văn hóa",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 83. ( )에 들어갈 말로 가장 알맞은 것을 고르십시오. \n무더운 여름날 시원한 물줄기를 내뿜는 분수는 사막에서 오아시스를 만난 것처럼 시원하게 해준다. 분수는 갇혀 있는 물을 내보내거나 인공적으로 물의 흐름을 조절하기 위해 만든 것으로 예로부터 정원을 설계하는 데에 있어 중요한 요소가 되어왔다. 주로 도시 계획의 일환으로 분수를 조성하는 것이 일반적이지만 중세 유럽에서는 권력의 상징으로 궁전이나 별장을 ( ) 화려한 조각상을 만드는 등 한껏 멋을 부려 분수를 만들기도 했다.",
        "title_translation": "Câu 83. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "권력의 상징으로 궁이나 별장에 화려한 조각상을 만들고 분수를 만들었다고 했으므로 ②가 들어가야 자연스럽다.",
        "explain_translation": "Vì đoạn văn nói về việc xây dựng các bức tượng rực rỡ và đài phun nước tại cung điện hoặc biệt thự như một biểu tượng của quyền lực, nên đáp án ② là phù hợp.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "더 넓게 보이기 위해",
                "value_translation": "để trông rộng rãi hơn",
                "file": null
            },
            {
                "value": "호화롭게 꾸미기 위해",
                "value_translation": "để trang hoàng một cách xa hoa",
                "file": null
            },
            {
                "value": "비싸게 사고팔기 위해",
                "value_translation": "để mua bán với giá đắt đỏ",
                "file": null
            },
            {
                "value": "국민에게 돌려주기 위해",
                "value_translation": "để trả lại cho người dân",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 84. ( )에 들어갈 말로 가장 알맞은 것을 고르십시오.\n전염성이 매우 강한 호흡기 감염 바이러스의 확산을 막기 위해서는 개개인의 위생 관리가 무엇보다 중요하다. 특히 많은 사람들이 함께 사용하는 물건이나 시설물을 만진 뒤에는 비누와 따뜻한 물을 이용해 20초 이상 손을 씻어야 한다. 또한 외부 활동 중에는 되도록 손으로 눈이나 코, 입을 건드리지 않는 것이 좋다. 그러나 자신도 모르게 ( ) 조심을 했다 해도 외출 후 귀가했을 때에는 가장 먼저 손을 씻는 습관을 가져야 한다.",
        "title_translation": "Câu 84. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "손으로 코나 입을 만지게 되면 호흡기 감염이 일어날 수 있기 때문에 손을 잘 씻어야 한다는 내용이므로 ③이 들어가야 자연스럽다.",
        "explain_translation": "Nội dung nhấn mạnh việc tay có thể chạm vào mũi hoặc miệng gây nhiễm trùng nên cần rửa tay, đáp án ③ là phù hợp.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "병원에 갈 수 없으므로",
                "value_translation": "vì không thể đi bệnh viện",
                "file": null
            },
            {
                "value": "감염 예방을 하게 되므로",
                "value_translation": "vì sẽ phòng ngừa được nhiễm trùng",
                "file": null
            },
            {
                "value": "무엇인가 만질 수 있으므로",
                "value_translation": "vì có thể sẽ chạm vào thứ gì đó",
                "file": null
            },
            {
                "value": "다른 사람과 만날 수 있으므로",
                "value_translation": "vì có thể gặp gỡ người khác",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 85. ( )에 들어갈 말로 가장 알맞은 것을 고르십시오. \n신혼여행 중에 바다에 빠진 사람을 구해 낸 경찰관 부부의 미담이 사람들에게 감동을 안겨 주고 있다. 바닷가를 산책하던 이 부부는 바다 위에 떠 있는 검은색 물체를 발견했고 자세히 보니 20대 남성이 물에 빠진 것이었다. 수영에 능숙한 경찰관 남편이 물에 뛰어들어 남성을 구조했고 간호사인 아내는 119에 신고를 한 뒤 의식을 잃는 남성에게 응급조치를 진행했다. 파도가 높은 위험한 상황에서도 적극적인 대처로 ( ) 이 부부에게 의로운 시민상이 수여되었다.",
        "title_translation": "Câu 85. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "경찰관 부부의 적극적인 대처로 생명을 구조했다는 내용이므로 ④가 들어가야 자연스럽다.",
        "explain_translation": "Câu chuyện nói về việc cặp đôi cảnh sát đã cứu sống một người, nên đáp án ④ là phù hợp.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "자연 환경을 지켜 낸 ",
                "value_translation": "đã bảo vệ môi trường tự nhiên",
                "file": null
            },
            {
                "value": "어려운 도전에 성공한",
                "value_translation": "đã thành công trong thử thách khó khăn",
                "file": null
            },
            {
                "value": "구조 방법을 널리 알린 ",
                "value_translation": "đã phổ biến rộng rãi phương pháp cứu hộ",
                "file": null
            },
            {
                "value": "소중한 생명을 구해 낸",
                "value_translation": "đã cứu được mạng sống quý giá",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 86. 다음을 읽고 글의 내용과 같은 것을 고르십시오. \n자연 휴양림이란 산이나 숲과 같은 곳에 휴양 시설을 설치하여 국민의 휴식 공간으로 제공하고 자연 교육장으로서의 역할과 산림 소유자의 소득 향상에도 기여할 수 있도록 지정한 산림, 즉 숲을 일컫는 말이다. 휴양림의 효율적인 관리와 소득 증진을 위해 휴양림의 관리 및 운영자는 입장료 또는 시설 사용료를 받을 수 있도록 하고 있다. 이는 이용객들에게 다양한 체험을 제공하기 위한 접근성을 우선으로 하기 때문에 일반 산과는 차이가 있다.",
        "title_translation": "Câu 68. Chọn nội dung giống với đoạn văn trên.",
        "audio_file": null,
        "explain": "산림 소유자의 소득 향상에 기여할 수 있다고 했으므로 ③이 답이 된다.",
        "explain_translation": "Đoạn văn có nêu rằng rừng nghỉ dưỡng góp phần nâng cao thu nhập cho chủ sở hữu rừng, nên đáp án ③ là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "전국의 모든 산과 숲은 자연 휴양림으로 지정되어 있다.",
                "value_translation": "Tất cả các núi và rừng trên toàn quốc đều được chỉ định là rừng nghỉ dưỡng tự nhiên.",
                "file": null
            },
            {
                "value": "국민의 교육과 휴식을 위해 지역마다 교육 장소가 설치되었다.",
                "value_translation": "Mỗi khu vực đều lắp đặt địa điểm giáo dục vì sự nghỉ ngơi và học tập của người dân.",
                "file": null
            },
            {
                "value": "휴양림 입장료는 숲의 주인에게 경제적으로 이익을 가져다준다. ",
                "value_translation": "Phí vào cửa rừng nghỉ dưỡng mang lại lợi ích kinh tế cho chủ rừng.",
                "file": null
            },
            {
                "value": "이용객들에게 체험의 기회를 주기 위해 숲을 무료 개방하고 있다.",
                "value_translation": "Rừng đang được mở cửa miễn phí để tạo cơ hội trải nghiệm cho khách tham quan.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 87. 다음을 읽고 글의 내용과 같은 것을 고르십시오. \n맥주에는 탄산이 들어 있기 때문에 마시다 남기면 탄산의 양이 줄어들어서 다시 마셨을 때 본래의 맛을 느낄 수 없다. 이러한 김빠진 맥주는 버리지 말고 다양하게 활용하는 것이 좋다. 생선이나 육류를 요리할 때 넣으면 생선의 비린내나 고기의 잡냄새도 없애고 육질을 부드럽게 만들어 준다. 또한 싱크대나 타일 등의 청소에 사용하면 손쉽게 기름때를 제거할 수 있으며 화장실 변기 청소에도 유용하다. 남은 맥주를 변기에 붓고 10분 정도 후에 물을 내리면 특유의 냄새나 얼룩 제거에 효과적이다.",
        "title_translation": "Câu 87. Chọn nội dung giống với đoạn văn trên.",
        "audio_file": null,
        "explain": "요리할 때 넣으면 고기의 잡냄새도 없애고 육질을 부드럽게 만든다고 했으므로 ①이 답이 된다.",
        "explain_translation": "Vì văn bản có nói rằng nếu cho bia thừa vào khi nấu thịt sẽ làm thịt mềm hơn và khử mùi, nên đáp án ① là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "고기를 요리할 때 먹다 남은 맥주를 넣으면 고기가 더 연해진다.",
                "value_translation": "Khi nấu thịt, nếu cho bia uống dở vào thì thịt sẽ trở nên mềm hơn.",
                "file": null
            },
            {
                "value": "신선한 맥주는 맛도 좋지만 화장실 청소나 방향제로도 유용하다.",
                "value_translation": "Bia tươi không chỉ ngon mà còn hữu ích để dọn nhà vệ sinh hoặc làm chất khử mùi.",
                "file": null
            },
            {
                "value": "탄산음료에는 생선이나 고기의 냄새를 잡아 주는 성분이 들어 있다.",
                "value_translation": "Trong đồ uống có gas có thành phần giúp khử mùi cá hoặc thịt.",
                "file": null
            },
            {
                "value": "맥주로 만든 세제는 싱크대나 타일의 기름때 제거에 탁월한 효과가 있다.",
                "value_translation": "Chất tẩy rửa làm từ bia có hiệu quả vượt trội trong việc loại bỏ vết dầu mỡ trên bồn rửa hoặc gạch.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 88. 다음을 읽고 글의 내용과 같은 것을 고르십시오. \n최근 20년 만에 대중들의 관심과 인기를 끌면서 중년의 나이에 다시 연예 활동을 시작한 가수가 있어 화제이다. 오랜 공백을 깨고 복귀하여 활동하는 연예인들은 종종 있지만 이 가수가 화제의 중심에 서게 된 계기는 좀 특별하다. 예전의 음악에 호기심이 있는 청소년들이 그의 젊은 시절 활동 영상에 관심을 갖게 되면서 온라인으로 널리 퍼지게 되었고 결국 한 방송 프로그램에서 그를 찾아내 출연하게 되었다. 이를 계기로 그에게 대중의 관심이 쏠리면서 결국 그를 다시 연예계로 불러들이게 된 것이다.",
        "title_translation": "Câu 88. Chọn nội dung giống với đoạn văn trên.",
        "audio_file": null,
        "explain": "중년의 나이에 다시 연예 활동을 시작한 가수가 있어 화제라고 했으므로 ③이 답이 된다.",
        "explain_translation": "Đoạn văn nói về một ca sĩ nhận được sự quan tâm lớn từ công chúng và quay lại showbiz sau thời gian dài vắng bóng, nên đáp án ③ là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "이 가수는 공백 기간이 길어져 결국 대중들의 시야에서 멀어졌다.",
                "value_translation": "Ca sĩ này có thời gian vắng bóng dài nên cuối cùng đã biến mất khỏi tầm mắt công chúng.",
                "file": null
            },
            {
                "value": "연예계를 떠났다가 자의로 다시 복귀하는 경우가 최근에 많아졌다.",
                "value_translation": "Gần đây số trường hợp rời khỏi showbiz rồi tự ý quay trở lại đang tăng lên.",
                "file": null
            },
            {
                "value": "대중들에 의해 다시 연예계로 돌아온 한 가수가 관심을 끌고 있다.",
                "value_translation": "Một ca sĩ quay lại làng giải trí nhờ sự ủng hộ của công chúng đang thu hút sự chú ý.",
                "file": null
            },
            {
                "value": "청소년들은 콘서트보다 온라인을 통해 음악을 듣는 것을 더 선호한다.",
                "value_translation": "Thanh thiếu niên thích nghe nhạc qua mạng hơn là đi xem concert.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 89. 다음을 읽고 글의 주제로 가장 알맞은 것을 고르십시오. \n우리의 신체에 있는 모든 기관은 역할이 다르지만 독립적이지 않고 서로 긴밀하게 영향을 주고받으며 각자의 역할을 한다. 대표적인 감각 기관으로, 사물을 볼 수 있는 시각, 냄새를 맡을 수 있는 후각, 맛을 알 수 있는 미각 등은 단독으로는 완벽한 임무를 수행하기 어렵다. 예를 들어 코감기에 걸려 냄새를 맡지 못하게 되면 음식 맛을 느끼지 못하며 눈으로 볼 수 없다면 어떤 음식인지 알기가 어렵다. 이것이 코를 막고 눈을 가린 다음에 양파를 먹으면 양파인지 사과인지 구분을 못하는 이유이다.",
        "title_translation": "Câu 89. Chọn chủ đề phù hợp nhất của đoạn văn trên.",
        "audio_file": null,
        "explain": "신체의 모든 기관은 서로 긴밀하게 영향을 주고받는다고 했으므로 ④가 답이 된다.",
        "explain_translation": "Vì bài viết nói rằng các cơ quan trong cơ thể có mối liên hệ mật thiết với nhau để thực hiện vai trò, nên đáp án ④ là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "감기에 걸리면 모든 감각 기관이 제 역할을 다하지 못한다.",
                "value_translation": "Khi bị cảm, tất cả các cơ quan cảm giác đều không thể thực hiện đúng vai trò của mình.",
                "file": null
            },
            {
                "value": "눈으로 보지 못하면 음식 맛을 알게 해 주는 미각이 둔해진다.",
                "value_translation": "Nếu không nhìn thấy bằng mắt, vị giác giúp nhận biết mùi vị thức ăn sẽ trở nên cùn nhạy.",
                "file": null
            },
            {
                "value": "감각 기관 가운데 후각이 가장 민감하기 때문에 주의해야 한다.",
                "value_translation": "Phải cẩn thận vì khứu giác là cơ quan nhạy cảm nhất trong các cơ quan cảm giác.",
                "file": null
            },
            {
                "value": "신체의 각 기관들은 서로 밀접하게 연결되어 맡은 역할을 수행한다.",
                "value_translation": "Các cơ quan của cơ thể kết nối chặt chẽ với nhau để thực hiện vai trò được giao.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 90. 다음을 읽고 글의 주제로 가장 알맞은 것을 고르십시오. \n‘참는 게 미덕이다’라는 말이 있다. 참고 인내하는 것이 아름다운 행동이라는 의미일 것이다. 그러나 참는 것이 항상 좋은 것만은 아니다. 늘 참기만 하는 사람은 자신의 의견을 말하거나 상대방의 말에 반박하는 것에 익숙하지 않다. 자신의 언행으로 인해 생기는 갈등이 두려운 것이다. 그 결과 점점 소극적이 되고 불필요한 오해를 받을 수도 있다. 때로는 적극적으로 자기표현을 하는 것도 원만한 인간관계를 이어갈 수 있는 하나의 방법이다.",
        "title_translation": "Câu 90. Chọn chủ đề phù hợp nhất của đoạn văn trên.",
        "audio_file": null,
        "explain": "참는 것이 항상 좋은 것만은 아니라는 것이 주제가 된다.",
        "explain_translation": "Chủ đề là việc nhẫn nhịn không phải lúc nào cũng tốt cho các mối quan hệ, nên đáp án ④ là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "상대방의 말을 존중하려면 반대 의견을 내지 않는 것이 좋다. ",
                "value_translation": "Để tôn trọng lời nói của đối phương, tốt nhất là không nên đưa ra ý kiến phản đối.",
                "file": null
            },
            {
                "value": "갈등을 초래할 수 있는 언쟁은 피하는 것이 최선의 방법이다.",
                "value_translation": "Tránh các cuộc tranh cãi có thể gây ra mâu thuẫn là phương pháp tốt nhất.",
                "file": null
            },
            {
                "value": "불필요한 오해를 피하기 위해서는 최소한의 의사 표현을 한다. ",
                "value_translation": "Để tránh những hiểu lầm không đáng có, cần thể hiện ý kiến ở mức tối thiểu.",
                "file": null
            },
            {
                "value": "언제나 참기만 하는 것이 인간관계에 도움을 주는 것은 아니다.",
                "value_translation": "Việc lúc nào cũng chỉ biết nhẫn nhịn không hẳn là giúp ích cho các mối quan hệ.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 91. 다음을 읽고 글의 주제로 가장 알맞은 것을 고르십시오. \n자율 주행이란 운전자가 기기 조작을 하지 않아도 자동차 스스로 주행을 하는 것을 말한다. 쉽게 말하면 운전자 없이 혼자 달리는 자동차인 것이다. 자동차가 알아서 주변 상 황을 확인해 장애물을 피하고 목적지까지 최적의 경로를 선택하여 자동으로 주행한다. 운전자는 그저 다른 동승자와 마찬가지로 영화를 관람하거나 책을 읽는 등의 자유로운 행동을 해도 자동차가 목적지로 데려다 준다. 그러나 이런 자율 주행에 대한 논란이 많다. 안전성이나 보안 등의 문제가 끊임없이 제기되고 있는 만큼 이를 명확하게 확립해야 할 것이다.",
        "title_translation": "Câu 91. Chọn chủ đề phù hợp nhất của đoạn văn trên.",
        "audio_file": null,
        "explain": "안전성이나 보안 등의 문제로 인해 자율 주행에 대한 논란이 있다는 것이 주제가 된다.",
        "explain_translation": "Nội dung xoay quanh những nghi ngại và tranh luận về tính an toàn của xe tự hành, nên đáp án ② là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "목적지까지 가장 적합한 경로로 가려면 자율 주행이 바람직하다. ",
                "value_translation": "Để đi theo lộ trình phù hợp nhất đến đích, việc lái xe tự hành là điều đáng mong đợi.",
                "file": null
            },
            {
                "value": "자율 주행 자동차의 안전성이 확보되지 않아 의문이 제기되고 있다.",
                "value_translation": "Các nghi vấn đang được đặt ra vì tính an toàn của xe tự hành vẫn chưa được đảm bảo.",
                "file": null
            },
            {
                "value": "운전자의 자유로운 행동은 자신과 동승자 모두 위험에 빠뜨릴 수도 있다.",
                "value_translation": "Hành động tự do của người lái có thể khiến cả bản thân và người đi cùng gặp nguy hiểm.",
                "file": null
            },
            {
                "value": "주행 중에 장애물이 나타날 수 있어 반드시 주변 상황을 잘 확인해야 한다.",
                "value_translation": "Chướng ngại vật có thể xuất hiện khi đang chạy nên nhất định phải kiểm tra kỹ tình hình xung quanh.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 92. 다음을 읽고 글의 주제로 가장 알맞은 것을 고르십시오. \n고속도로를 달리다 보면 산을 뚫고 터널을 만들어 놓은 곳이 많다. 인간이 조금 빨리가기 위해 오랜 세월 형성된 울창한 숲을 파헤치고 산을 파괴하여 도로를 만든 것이다. 그 숲에는 어쩌면 수많은 나무들과 그곳에 공생하며 살아가고 있던 셀 수 없이 많은 생명들이 있었을 것이다. 그들은 어느 날 갑자기 사라져 버린 보금자리에 얼마나 당황했을까. 물론 인간의 삶을 위해 집을 짓고 길을 만들고 각종 편의 시설도 필요하다. 그러나 인간도 자연의 일부인 만큼 그 자연과 함께 살아가려는 노력을 게을리 해서는 안된다.",
        "title_translation": "Câu 92. Chọn chủ đề phù hợp nhất của đoạn văn trên.",
        "audio_file": null,
        "explain": "인간의 편리한 삶을 위해 개발도 필요하지만 자연과 함께 살아가려는 노력도 해야 한다는 것이 주제가 된다.",
        "explain_translation": "Bài viết nhấn mạnh việc dù cần phát triển để thuận tiện nhưng cũng phải nỗ lực chung sống với thiên nhiên, nên đáp án ② là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "과도한 도시 개발로 인해 심각한 환경오염이 이어지고 있다.",
                "value_translation": "Ô nhiễm môi trường nghiêm trọng đang tiếp diễn do phát triển đô thị quá mức.",
                "file": null
            },
            {
                "value": "인간의 편리함을 위해 자연을 파괴하는 행위는 최소화해야 한다.",
                "value_translation": "Phải giảm thiểu tối đa các hành vi phá hủy thiên nhiên vì sự tiện lợi của con người.",
                "file": null
            },
            {
                "value": "오랜 시간에 걸쳐 만들어진 자연 풍광을 활용하는 지혜가 필요하다.",
                "value_translation": "Cần có trí tuệ để tận dụng những phong cảnh thiên nhiên được tạo ra qua thời gian dài.",
                "file": null
            },
            {
                "value": "숲에 살고 있는 수많은 생명들을 위한 보호 대책이 마련되어야 한다.",
                "value_translation": "Phải chuẩn bị các biện pháp bảo vệ cho vô số sinh mạng đang sống trong rừng.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 93. 주어진 문장이 들어갈 곳으로 가장 알맞은 것을 고르십시오. \n사람들이 가장 많이 키우는 반려동물인 개는 일반적으로 혼자 있는 것을 싫어하고 주인과 함께 노는 시간을 즐긴다. （ ㉠ ）주인이 나가고 개가 혼자 집안에 있게 될 때에는 불안 증세를 보이기도 한다. （ ㉡ ） 이러한 경우를 분리 불안이라고 하는데 심해지면 주인이 있을 때도 비슷한 증세를 보이게 된다. （ ㉢ ） 이렇게 증세가 심해지면 수의사나 전문 훈련사의 자문을 받아 꾸준한 극복 훈련을 진행하는 것이 좋다. ( ㉣ ) \n배변을 실수한다거나 계속 울기도 하고 또는 집 안의 물건을 어지럽히고 파괴하는 행동이 나타날 때도 있다.",
        "title_translation": "Câu 93. Chọn vị trí phù hợp nhất cho câu văn đã cho: 'Có những lúc xuất hiện các hành động như đi vệ sinh sai chỗ, liên tục sủa, hoặc làm đảo lộn và phá hủy đồ đạc trong nhà'.",
        "audio_file": null,
        "explain": "불안 증세로 나타나는 행동에 대한 설명이므로 ②에 들어가는 것이 자연스럽다.",
        "explain_translation": "Vì đây là phần giải thích cho các hành động xuất hiện do triệu chứng bất an, nên nó phù hợp đi vào vị trí ②.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "㉠",
                "value_translation": "㉠",
                "file": null
            },
            {
                "value": "㉡ ",
                "value_translation": "㉡",
                "file": null
            },
            {
                "value": "㉢ ",
                "value_translation": "㉢",
                "file": null
            },
            {
                "value": "㉣",
                "value_translation": "㉣",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 94. 주어진 문장이 들어갈 곳으로 가장 알맞은 것을 고르십시오. \n별똥별로 추정되는 물체가 하늘에서 떨어졌다는 목격담이 잇따르고 있다. ( ㉠ ) 주황색 불덩어리와 함께 초록빛 꼬리가 길게 따라가는 것을 봤다는 이들이 대부분이었다. ( ㉡ )별똥별은 흐르는 별이라는 의미의 유성을 일반적으로 부르는 말이다. ( ㉢ ) 또한 별동별이 보기 드문 천문 현상은 아니지만 사람이 많은 주거 밀집 지역 부근으로 떨어지는 경우는 흔하지 않아 이를 본 사람들이 많았던 것이라고 했다. ( ㉣ ) \n한국천문연구원의 관계자의 말에 따르면 별똥별의 크기가 크면 불에 타는 화구처럼 보이는데 고도가 낮을수록 더 잘 보이게 된다고 말했다.",
        "title_translation": "Câu 94. Chọn vị trí phù hợp nhất cho câu văn đã cho: 'Theo lời của một người có liên quan tại Viện Nghiên cứu Thiên văn Hàn Quốc, nếu sao băng có kích thước lớn, nó trông giống như một quả cầu lửa đang cháy, và độ cao càng thấp thì càng dễ nhìn thấy'.",
        "audio_file": null,
        "explain": "별똥별에 대한 의미를 나타낸 문장 뒤인 ③에 들어가는 것이 자연스럽다.",
        "explain_translation": "Vị trí ③ là tự nhiên nhất vì nó đứng sau câu định nghĩa về ý nghĩa của sao băng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "㉠",
                "value_translation": "㉠",
                "file": null
            },
            {
                "value": "㉡ ",
                "value_translation": "㉡",
                "file": null
            },
            {
                "value": "㉢ ",
                "value_translation": "㉢",
                "file": null
            },
            {
                "value": "㉣",
                "value_translation": "㉣",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 95. 주어진 문장이 들어갈 곳으로 가장 알맞은 것을 고르십시오. \n영화나 드라마에서 극의 흐름을 한순간 역전되어 상황이 완전히 뒤바뀌는 것을 반전이라고 한다. ( ㉠ ) 이는 보는 이로 하여금 강렬한 충격과 자극을 맛보게 하는 중요한 기법이다. ( ㉡ ) 광고에서도 이 기법을 사용하기도 하는데 예를 들면 1980년대 영국에서 만든 한 광고에서 험악한 모습의 젊은 남자가 거리의 노인을 향해 위압적으로 달려간다. ( ㉢ ) 이 광고가 주는 반전의 의미는 사건을 바라보는 언론의 시점을 보여준다. ( ㉣ ) 상황을 어떠한 시 선으로 보느냐에 따라 완전히 다른 결과로 나타날 수 있기 때문이다. \n그 남자는 마치 노인을 공격하는 것처럼 보이지만 사실은 노인의 머리 위로 떨어지는 커다란 물체로부터 노인을 구하려는 행동이었다.",
        "title_translation": "Câu 95. Chọn vị trí phù hợp nhất cho câu văn đã cho: 'Người đàn ông đó trông có vẻ như đang tấn công ông lão, nhưng thực chất đó là hành động nhằm cứu ông lão khỏi một vật thể lớn đang rơi xuống đầu ông'.",
        "audio_file": null,
        "explain": "반전을 나타내는 문장이므로 ③에 들어가야 자연스럽다.",
        "explain_translation": "Vì đây là câu mô tả sự đảo ngược (phản chiến) trong nội dung quảng cáo đã nêu trước đó, nên vị trí ③ là phù hợp.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "㉠",
                "value_translation": "㉠",
                "file": null
            },
            {
                "value": "㉡ ",
                "value_translation": "㉡",
                "file": null
            },
            {
                "value": "㉢ ",
                "value_translation": "㉢",
                "file": null
            },
            {
                "value": "㉣",
                "value_translation": "㉣",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 96. 다음을 읽고 물음에 답하십시오. \n우리가 살게 될 ‘새집’은 내가 한 번도 가 본 적이 없는 낯선 동네에 있었다. 아버지는 큰길에서 한차례 꺾어 들어가고도 언덕길을 한참 올라가 반쯤 열린 초록색 철대문 앞에서 택시를 세웠다. 다왔다, 이 집이야. 아버지가 골목의 막다른 집을 가리키자 그 손짓에 딸려 나오듯 열린 대문 안쪽으로부터 홀쭉하게 키가 큰 젊은 남자가 나왔다. 검은 양복 윗도리 안에 역시 목까지 올라오는 검정 스웨터를 받쳐 입은，얼굴이 유난히 하얘 보이는 그 남자는 비껴 지나치다가 잠깐 걸음을 멈추고 유심히 우리를 바라보았다. 그와 눈이 마주치자 나는 책가방을 멘 우일이와 나， 울룩불룩한 보따리를 든 아버지의 모습이 갑자기 초라해 보이며 부끄러워졌다. 그가 지나치자 짙은 화장품 냄새가 흑 끼쳤다. 쳇，기생오라비같이..... 사내 새끼가 핥아먹은 죽사발 같은 낯반대기하곤..... 아버지가 불현듯 어깨를 한껏 젖히며 앙다문 잇새로 나지막이 욕설을 내뱉었다. 남자도 화장을 하나? 나는 깜짝 놀라 코를 쿵쿵거리며 벌써 저만치 멀어져가는 그를 뒤돌아보았다. \n                                                                      &lt;출처 : 새, 오정희, 문학과지성사&gt; \n밑줄 친 부분에 나타난 ‘나’의 심정으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 96. Chọn tâm trạng của 'tôi' được thể hiện ở phần gạch chân.",
        "audio_file": null,
        "explain": "반전을 나타내는 문장이므로 ③에 들어가야 자연스럽다.",
        "explain_translation": "Vì câu gạch chân mô tả sự ngạc nhiên khi thấy người đàn ông dùng nước hoa và có vẻ ngoài chau chuốt, nên đáp án là ①.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "신기하다",
                "value_translation": "Thấy lạ lẫm/thú vị",
                "file": null
            },
            {
                "value": "불안하다",
                "value_translation": "Thấy bất an",
                "file": null
            },
            {
                "value": "행복하다",
                "value_translation": "Thấy hạnh phúc",
                "file": null
            },
            {
                "value": "우울하다",
                "value_translation": "Thấy u uất",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 97. 윗글의 내용으로 알 수 있는 것을 고르십시오.",
        "title_translation": "Câu 97. Chọn nội dung có thể biết được từ đoạn văn trên.",
        "audio_file": null,
        "explain": "반전을 나타내는 문장이므로 ③에 들어가야 자연스럽다.",
        "explain_translation": "Đoạn văn mô tả ngôi nhà mới nằm trên một dốc cao cách xa đường lớn, nên đáp án ① là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "새집은 큰길에서 떨어진 언덕 위에 위치해 있었다.",
                "value_translation": "Ngôi nhà mới nằm trên một ngọn đồi cách xa đường lớn.",
                "file": null
            },
            {
                "value": "아버지는 새집에서 나온 남자를 마음에 들어 하셨다.",
                "value_translation": "Người cha có vẻ hài lòng với người đàn ông bước ra từ ngôi nhà mới.",
                "file": null
            },
            {
                "value": "아버지가 운전하는 화물차를 타고 새집으로 이동했다.",
                "value_translation": "Đã di chuyển đến nhà mới bằng xe tải do người cha lái.",
                "file": null
            },
            {
                "value": "새로 살게 될 집에서 젊은 남자가 친절히 맞아 주었다.",
                "value_translation": "Một người đàn ông trẻ tuổi đã chào đón nồng nhiệt tại ngôi nhà mới.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 98. 다음을 읽고 물음에 답하십시오. \n가격 대비 성능이라는 표현을 줄여 '가성비’ 라는 말을 사용한다. 이 말은 가격에 대비해 성능이 어떤가를 따지는 것으로 가성비가 좋다는 말은 가격과 비교해서 (                   ) 의미가 된다. 즉, 실속을 따져 합리적 소비를 추구하는 것이다. 이와 대비된 표현으로 사용하는 ‘가심비’는 가격에 따른 심리적 만족의 비율을 나타내는 말이다. 이 경우에는 가격과 대비하여 성능이 어떤가는 중요하지 않다. 심리적으로 만족을 하느냐 못 하느냐가 중요한 것이다. 지금까지는 가성비를 주로 따졌다면 이제는 가심비가 중요한 화두로 떠오르고 있다. 이는 생활 수준이 높아지면서 심리적인 안정을 얻고 스트레스를 줄이기 위한 지출이 늘어난다는 의미를 가지고 있다. 과소비나 낭비와는 또 다른 차원으로 이해해야 할 것이다. \n윗글의 주제로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 98. Chọn chủ đề phù hợp nhất của đoạn văn trên.",
        "audio_file": null,
        "explain": "생활수준이 높이지면서 심리적인 안정을 얻고 스트레스를 줄이기 위한 지출이 늘어나고 있다는 것이 주제가 된다.",
        "explain_translation": "Chủ đề là xu hướng chi tiêu đang chuyển dịch sang việc tìm kiếm sự thỏa mãn về tâm lý thay vì chỉ tính toán tính kinh tế, nên đáp án ④ là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "소비 방식의 변화는 생활 수준이나 사회 인식과는 관계가 없다. ",
                "value_translation": "Sự thay đổi phương thức tiêu dùng không liên quan đến mức sống hay nhận thức xã hội.",
                "file": null
            },
            {
                "value": "스트레스를 해소하기 위해 과소비 지출을 하는 것은 옳지 않다.",
                "value_translation": "Việc chi tiêu quá mức để giải tỏa căng thẳng là không đúng đắn.",
                "file": null
            },
            {
                "value": "가격과 대비하여 우수한 품질을 가진 제품이 인기를 끌기 마련이다. ",
                "value_translation": "Sản phẩm có chất lượng ưu việt so với giá cả chắc chắn sẽ được ưa chuộng.",
                "file": null
            },
            {
                "value": "과거의 합리적 소비보다 심리적 만족도를 위한 지출이 늘어나고 있다.",
                "value_translation": "Chi tiêu cho sự hài lòng về tâm lý đang tăng lên so với tiêu dùng hợp lý trong quá khứ.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 99. (               )에 들어갈 말로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 99. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "가성비가 좋다는 말을 나타내는 것이므로 ①이 들어가야 자연스럽다.",
        "explain_translation": "Để giải thích ý nghĩa của việc 'tính kinh tế tốt' (가성비), đáp án ① là tự nhiên nhất.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "성능이 뛰어나다는 ",
                "value_translation": "tính năng vượt trội",
                "file": null
            },
            {
                "value": "여러 제품을 구매하는",
                "value_translation": "mua nhiều sản phẩm",
                "file": null
            },
            {
                "value": "품질이 미치지 못한다는",
                "value_translation": "chất lượng không đạt tới",
                "file": null
            },
            {
                "value": "심리적으로 만족하고 싶다는",
                "value_translation": "muốn hài lòng về tâm lý",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 100. 다음을 읽고 물음에 답하십시오. \n온라인으로 모든 것이 가능한 디지털 시대에 새롭게 떠오른 직업이 바로 디지털 장의사이다. 이는 인터넷상에 있는 디지털 정보를 고객의 요청으로 삭제해 주는 일을 하는 직업을 말한다. 광범위하게 퍼져 있을 수 있는 과거의 기록이나 정보 등을 지우고 싶은 사람들에게는 매우 절실하고 요긴하게 이용되고 있다. 디지털 장의사 자격증을 취득하기 위한 특별한 자격 요건은 없으며 컴퓨터 지식을 갖추고 꼼꼼한 성격을 가지고 있다면 누구든 도전이 가능하다. 다만 고객을 대신해서 해당 사이트에 자료 삭제를 요청하는 것이기 때문에 요청서 작성 등에 필요한 글쓰기 능력이 필요하다. 사실 장의사는 죽은 사람의 장례에 필요한 여러 가지 일을 맡아 하는 직업을 뜻하기 때문에 이 명칭이 올바른가에 대한 논란이 있어 사이버 매니저 또는 디지털 자산 관리사라고 불리기도 한다. 그러나 디지털 정보를 완전히 삭제해 주는 일을 대변하는 적합한 명칭이라 여겨 가장 대중적으로 사용되고 있는 말이다 \n윗글에 나타난 필자의 태도로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 100. Chọn thái độ phù hợp nhất của tác giả trong đoạn văn trên.",
        "audio_file": null,
        "explain": "디지털 장의사가 무엇인지 그리고 어떤 자격이 필요한지 말하는 내용이므로 ④가 답이 된다.",
        "explain_translation": "Tác giả đang giải thích chi tiết về định nghĩa và các yêu cầu để trở thành một 'người dọn dẹp kỹ thuật số', nên đáp án ④ là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "정확한 자료를 가지고 다양한 직업의 세계를 분석하고 있다. ",
                "value_translation": "Đang phân tích thế giới nghề nghiệp đa dạng bằng những tài liệu chính xác.",
                "file": null
            },
            {
                "value": "대중적으로 사용하는 직업의 명칭 논란에 대해 비판하고 있다.",
                "value_translation": "Đang phê phán những tranh cãi về tên gọi nghề nghiệp được sử dụng phổ biến.",
                "file": null
            },
            {
                "value": "온라인상의 방대한 정보를 삭제해야 하는 이유를 설명하고 있다. ",
                "value_translation": "Đang giải thích lý do tại sao phải xóa bỏ những thông tin khổng lồ trên mạng.",
                "file": null
            },
            {
                "value": "디지털 장의사의 의미와 자격 요건에 대해 자세히 소개하고 있다.",
                "value_translation": "Đang giới thiệu chi tiết về ý nghĩa và các điều kiện cấp chứng chỉ của nghề dọn dẹp kỹ thuật số.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 101. 윗글의 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 101. Chọn nội dung giống với đoạn văn trên.",
        "audio_file": null,
        "explain": "디지털 정보를 고객의 요청으로 삭제해 주는 일이 디지털 장의사라고 했으므로 ③이 답이 된다.",
        "explain_translation": "Văn bản nêu rõ có nghề nghiệp giúp xóa bỏ thông tin cá nhân trên mạng theo yêu cầu, nên đáp án ③ là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 2,
        "answers": [
            {
                "value": "온라인상에 잘못된 정보를 올리는 것에 대한 논란이 많다.",
                "value_translation": "Có nhiều tranh cãi về việc đăng tải thông tin sai lệch lên mạng.",
                "file": null
            },
            {
                "value": "직업의 명칭이 올바르지 않으면 바꿔 주는 일이 인기가 있다.",
                "value_translation": "Việc đổi tên nghề nghiệp nếu nó không đúng đang rất được ưa chuộng.",
                "file": null
            },
            {
                "value": "인터넷에 퍼져 있는 개인 정보를 대신 지워 주는 직업이 있다.",
                "value_translation": "Có một nghề giúp xóa bỏ những thông tin cá nhân lan truyền trên internet.",
                "file": null
            },
            {
                "value": "디지털 장의사 자격증을 취득하기 위한 자격 요건이 까다롭다.",
                "value_translation": "Các điều kiện để lấy chứng chỉ nghề dọn dẹp kỹ thuật số rất khắt khe.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 102. 다음을 읽고 물음에 답하십시오. \n한국의 전통의 복은 역사적으로 형태와 방식에 있어서 변화를 겪으며 이어져 왔으며 계급의 상하와 직업의 귀천 등을 이유로 옷의 모양이나 무늬, 색상들에서 크게 차이를 두었다. 그러나 근대에 들어서면서 서양 문물의 유입과 제도, 인식의 변화에 따라 복식이 점차 (                    ) 현대의 한복은 이전의 엄격했던 복식 구분과는 완전히 달라졌다. 지금은 주로 결혼, 명절, 잔치, 제사 등의 특별한 날 예복으로 입는다. 한복의 멋은 곡선이 가지는 부드러움과 우아함에 있으며 몸을 조이지 않는 너그러움을 가지고 있다. 여자의 한복은 치마와 저고리를 기본으로 하고 속바지, 속치마를 입고 버선을 신으며 겉 옷으로 두루마기 등을 입는다. 또한 남자는 바지와 저고리가 기본이 되고 조끼와 마고자, 겉옷으로 두루마기를 입는다. 그리고 양복의 단추에 해당하는 고름이 있는데 남녀 공통으로 이 고름을 매어 옷을 여미게 된다. \n윗글을 쓴 목적으로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 102. Chọn mục đích phù hợp nhất của người viết đoạn văn trên.",
        "audio_file": null,
        "explain": "한복이 역사적으로 변화를 겪어왔으며 그 특징을 묘사하고 있으므로 ④가 답이 된다.",
        "explain_translation": "Đoạn văn mô tả sự thay đổi qua lịch sử và các đặc điểm cấu tạo của Hanbok, nên đáp án ④ là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 3,
        "answers": [
            {
                "value": "남녀 한복의 차이를 강조하기 위해 ",
                "value_translation": "Để nhấn mạnh sự khác biệt giữa Hanbok nam và nữ.",
                "file": null
            },
            {
                "value": "전통 한복의 다양성을 홍보하기 위해",
                "value_translation": "Để quảng bá sự đa dạng của Hanbok truyền thống.",
                "file": null
            },
            {
                "value": "복식 문화의 역사적 의미를 설명하기 위해 ",
                "value_translation": "Để giải thích ý nghĩa lịch sử của văn hóa trang phục.",
                "file": null
            },
            {
                "value": "한복의 역사적 변화와 특징을 알려주기 위해",
                "value_translation": "Để thông tin về sự thay đổi lịch sử và đặc điểm của Hanbok.",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 103. (                )에 들어갈 말로 가장 알맞은 것을 고르십시오.",
        "title_translation": "Câu 103. Chọn từ phù hợp nhất điền vào ( ).",
        "audio_file": null,
        "explain": "한복이 역사적으로 변화를 겪어왔으며 그 특징을 묘사하고 있으므로 ④가 답이 된다.",
        "explain_translation": "Nội dung cho thấy Hanbok đã thay đổi theo hướng đơn giản hơn so với sự phân chia nghiêm ngặt trước đây, nên đáp án ② là phù hợp.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 1,
        "answers": [
            {
                "value": "화려해졌기 때문에",
                "value_translation": "vì đã trở nên lộng lẫy hơn",
                "file": null
            },
            {
                "value": "간소화되었기 때문에",
                "value_translation": "vì đã được đơn giản hóa",
                "file": null
            },
            {
                "value": "멋이 사라졌기 때문에",
                "value_translation": "vì vẻ đẹp đã biến mất",
                "file": null
            },
            {
                "value": "가격이 비싸졌기 때문에",
                "value_translation": "vì giá cả đã trở nên đắt đỏ",
                "file": null
            }
        ],
        "score": 2
    },
    {
        "title": "Câu 104. 윗글의 내용과 같은 것을 고르십시오.",
        "title_translation": "Câu 104. Chọn nội dung giống với đoạn văn trên.",
        "audio_file": null,
        "explain": "남자와 여자의 한복이 다른 것을 말하고 있으므로 ①이 답이 된다.",
        "explain_translation": "Bài viết liệt kê rõ các loại trang phục khác nhau cấu thành nên Hanbok của nam và nữ, nên đáp án ① là đúng.",
        "image_file": null,
        "type": "Reading",
        "correct_index": 0,
        "answers": [
            {
                "value": "한복은 남자와 여자가 입는 복식의 종류가 다르다.",
                "value_translation": "Hanbok có các loại trang phục dành cho nam và nữ khác nhau.",
                "file": null
            },
            {
                "value": "예전부터 특별한 날 한복을 차려 입는 풍습이 있었다.",
                "value_translation": "Từ xa xưa đã có phong tục mặc Hanbok chỉnh tề vào những ngày đặc biệt.",
                "file": null
            },
            {
                "value": "현대의 한복은 직업에 따라 모양과 색상을 다르게 입는다.",
                "value_translation": "Hanbok hiện đại được mặc với kiểu dáng và màu sắc khác nhau tùy theo nghề nghiệp.",
                "file": null
            },
            {
                "value": "한복의 특징은 우아한 형태로 몸에 딱 맞게 만드는 데에 있다.",
                "value_translation": "Đặc điểm của Hanbok nằm ở việc tạo ra hình dáng tao nhã ôm vừa khít cơ thể.",
                "file": null
            }
        ],
        "score": 2
    }
];