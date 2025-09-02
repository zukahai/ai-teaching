# 🧾 7.2 Tạo bộ câu hỏi kiểm tra tự động

## 🎯 Giới thiệu

Sử dụng AI để tự động tạo ra các bộ câu hỏi kiểm tra đa dạng, phù hợp với mục tiêu học tập và độ khó mong muốn, giúp giáo viên tiết kiệm thời gian và đảm bảo chất lượng đánh giá.

## 📋 Mục tiêu học tập

Sau bài học này, bạn sẽ có thể:
- Tạo câu hỏi trắc nghiệm tự động với AI
- Thiết kế câu hỏi tự luận và bài tập thực hành
- Xây dựng ngân hàng câu hỏi theo taxonomy
- Tự động tạo đề thi với độ khó cân bằng

## 🤖 AI Tools cho tạo câu hỏi

### 1. ChatGPT cho Question Generation

**Prompt framework cho câu hỏi chất lượng:**
```
ROLE: Chuyên gia thiết kế đánh giá giáo dục

TASK: Tạo [số lượng] câu hỏi [loại] về chủ đề [topic]

SPECIFICATIONS:
- Đối tượng: Học sinh lớp [X]
- Độ khó: [Dễ/Trung bình/Khó]
- Mục tiêu: [Bloom's level - Remember/Understand/Apply/Analyze/Evaluate/Create]
- Format: [Multiple choice/True-False/Fill in blank/Essay]

QUALITY CRITERIA:
- Câu hỏi rõ ràng, không gây nhầm lẫn
- Đáp án chính xác và có giải thích
- Distractors hợp lý cho multiple choice
- Phù hợp với curriculum Việt Nam

OUTPUT FORMAT:
1. Question text
2. Options (nếu MC)
3. Correct answer
4. Explanation/Rationale
5. Bloom's level
6. Estimated difficulty

TOPIC: [Chi tiết chủ đề cần tạo câu hỏi]
```

### 2. Quillionz - Auto Question Generator

**Features:**
- Upload text → Auto generate questions
- Multiple question types
- Difficulty levels
- Export to various formats

**Workflow:**
1. Upload lesson content/textbook chapter
2. Select question types needed
3. Set difficulty distribution
4. Review and edit generated questions
5. Export to testing platform

### 3. Wordwall - Interactive Question Creator

**Tạo quiz tương tác:**
- Spin the wheel với câu hỏi
- Memory games với concepts
- Matching pairs cho vocabulary
- True/False rapid fire

## 📝 Các loại câu hỏi và templates

### 1. Multiple Choice Questions (MCQ)

**Template cho câu hỏi MCQ chất lượng:**
```
Prompt: "Tạo 5 câu hỏi trắc nghiệm về [Phương trình bậc 2] cho lớp 9:

REQUIREMENTS:
- 1 câu Remember (nhớ công thức)  
- 2 câu Understand (hiểu khái niệm)
- 2 câu Apply (áp dụng giải bài)

FORMAT:
Câu X: [Question text]
A. [Option A]
B. [Option B] 
C. [Option C]
D. [Option D]
Đáp án: [Letter]
Giải thích: [Why this answer]
Level: [Bloom's level]

Lưu ý: Distractors phải có logic sai phổ biến của học sinh"
```

**Example output:**
```
Câu 1: Phương trình x² - 5x + 6 = 0 có tổng các nghiệm bằng:
A. -5
B. 5  ✓
C. 6
D. -6
Đáp án: B
Giải thích: Theo định lý Vi-et, tổng nghiệm = -b/a = -(-5)/1 = 5
Level: Remember
```

### 2. True/False với giải thích

**Enhanced T/F format:**
```
Prompt: "Tạo 10 câu đúng/sai về Quang hợp cho lớp 6, kèm giải thích chi tiết:

FORMAT:
Câu X: [Statement]
Đáp án: Đúng/Sai
Giải thích: [Tại sao đúng/sai và concept nào liên quan]
Sai lầm phổ biến: [Nếu là câu sai]"
```

### 3. Fill-in-the-blank thông minh

**Cloze test generation:**
```
Original text: "Việt Nam có diện tích 331.690 km² và dân số khoảng 97 triệu người."

AI-generated cloze:
"Việt Nam có diện tích _______ km² và dân số khoảng _______ triệu người."

Options to fill:
a) 331.690 và 97
b) 329.560 và 95  
c) 340.000 và 100
d) 310.000 và 90
```

### 4. Matching Questions

**AI-generated matching sets:**
```
Prompt: "Tạo bài matching 10 cặp về các nhà khoa học và phát minh của họ:

FORMAT:
Cột A (Scientists): [List 10 tên]
Cột B (Inventions): [List 10 phát minh - không theo thứ tự]
Answer key: [A1-B3, A2-B7, etc.]"
```

## 🎯 Question Banks theo taxonomy

### 1. Bloom's Taxonomy Framework

**Remember Level (20%):**
```
- Nhớ công thức, định nghĩa
- Liệt kê các bước trong quy trình
- Xác định symbols và terms
- Recall facts và dates

Example: "Công thức tính diện tích hình vuông là gì?"
```

**Understand Level (25%):**
```
- Giải thích concepts bằng từ của mình
- So sánh và đối chiếu
- Tóm tắt main ideas
- Interpret charts và graphs

Example: "Giải thích tại sao nước biển có vị mặn?"
```

**Apply Level (25%):**
```
- Sử dụng công thức để giải bài tập
- Apply rules trong situations mới
- Demonstrate procedures
- Calculate và compute

Example: "Tính diện tích của khu vườn hình chữ nhật có chiều dài 15m, rộng 8m"
```

**Analyze Level (15%):**
```
- Phân tích cause và effect
- Compare và contrast
- Identify patterns và relationships
- Break down complex problems

Example: "Phân tích các yếu tố ảnh hưởng đến tốc độ tan của đường trong nước"
```

**Evaluate Level (10%):**
```
- Judge quality của solutions
- Assess validity của arguments
- Compare alternatives
- Critique ideas và methods

Example: "Đánh giá ưu nhược điểm của năng lượng mặt trời so với năng lượng hoá thạch"
```

**Create Level (5%):**
```
- Design new solutions
- Create original works
- Combine elements in new ways
- Generate hypotheses

Example: "Thiết kế một thí nghiệm để chứng minh nước sôi ở 100°C"
```

### 2. Auto-distribution theo độ khó

**Python script cho question distribution:**
```python
def generate_balanced_test(topic, total_questions=20):
    """
    Tạo đề kiểm tra cân bằng theo Bloom's taxonomy
    """
    distribution = {
        'remember': int(total_questions * 0.20),
        'understand': int(total_questions * 0.25), 
        'apply': int(total_questions * 0.25),
        'analyze': int(total_questions * 0.15),
        'evaluate': int(total_questions * 0.10),
        'create': int(total_questions * 0.05)
    }
    
    questions = []
    for level, count in distribution.items():
        prompt = f"Tạo {count} câu hỏi {level} level về {topic}"
        ai_questions = call_chatgpt_api(prompt)
        questions.extend(ai_questions)
    
    return questions
```

## 📊 Advanced Question Generation

### 1. Data-driven Questions

**Tạo câu hỏi từ datasets:**
```
Prompt: "Dựa vào dữ liệu dân số Việt Nam này, tạo 5 câu hỏi phân tích:

DATA:
2010: 86.9 triệu
2015: 91.7 triệu  
2020: 97.3 triệu
2023: 98.2 triệu

Yêu cầu:
- 2 câu về growth rate calculation
- 2 câu về trend analysis  
- 1 câu về prediction/projection
- Include cả MC và short answer formats"
```

### 2. Visual Question Generation

**Câu hỏi từ images và diagrams:**
```
Workflow:
1. Upload image (chart, diagram, photo)
2. AI describes image content
3. Generate questions based on visual elements
4. Create answer choices related to visual data

Example: Upload biểu đồ tròn kinh tế VN
→ AI tạo câu hỏi về tỷ lệ các ngành, so sánh sectors, etc.
```

### 3. Scenario-based Questions

**Real-world application questions:**
```
Prompt: "Tạo 3 câu hỏi scenario về áp suất chất lỏng cho lớp 8:

REQUIREMENTS:
- Real-world contexts (swimming, drinking straws, etc.)
- Problem-solving approach
- Multi-step solutions
- Vietnamese cultural relevance

FORMAT:
Scenario: [Detailed situation]
Question: [What to find/analyze]
Given data: [Provided information]  
Expected approach: [Solution steps]
Answer: [Numerical + explanation]"
```

## 🔄 Automated Test Assembly

### 1. Smart Test Creation

**AI-powered test assembly:**
```python
def create_comprehensive_test(subject, grade, duration_minutes):
    """
    Tạo đề thi tự động cân bằng
    """
    # Calculate question count based on duration
    questions_count = estimate_question_count(duration_minutes, grade)
    
    # Content coverage analysis
    curriculum_topics = get_curriculum_topics(subject, grade)
    topic_weights = calculate_topic_importance(curriculum_topics)
    
    # Question distribution
    question_plan = []
    for topic, weight in topic_weights.items():
        topic_questions = int(questions_count * weight)
        difficulty_mix = get_difficulty_distribution(grade)
        
        for difficulty, percentage in difficulty_mix.items():
            count = int(topic_questions * percentage)
            question_plan.append({
                'topic': topic,
                'difficulty': difficulty,
                'count': count,
                'bloom_level': suggest_bloom_level(difficulty)
            })
    
    # Generate questions according to plan
    final_test = []
    for plan_item in question_plan:
        questions = generate_questions_ai(plan_item)
        final_test.extend(questions)
    
    # Final assembly và formatting
    assembled_test = assemble_test_format(final_test)
    return assembled_test
```

### 2. Alternative Versions

**Tạo multiple versions tự động:**
```
Prompt: "Tạo 3 phiên bản khác nhau của câu hỏi này, giữ nguyên độ khó và concept:

Original: 'Tính chu vi hình chữ nhật có chiều dài 12cm, chiều rộng 8cm'

Requirements:
- Change numbers nhưng keep difficulty level
- Different contexts (garden, room, field, etc.)
- Same mathematical concept và steps
- Maintain Vietnamese language natural flow"
```

## 📱 Mobile Question Creation

### 1. Voice-to-Question

**Speech-based question generation:**
```
Workflow:
1. Teacher speaks question idea: "Tôi muốn hỏi về quang hợp"
2. AI transcribes and enhances
3. Generates complete question with options
4. Teacher reviews and approves
5. Adds to question bank automatically
```

### 2. Quick Question Apps

**Mobile-friendly generation:**
- **Snap questions:** Photo of textbook → Auto-generate
- **Voice prompts:** Speak topic → Get question sets
- **Template filling:** Quick forms for rapid creation
- **Offline generation:** Pre-generated question pools

## 🎯 Bài tập thực hành

### Bài tập 1: Multi-level Question Set
1. Chọn 1 topic từ curriculum
2. Tạo 20 câu hỏi covering all Bloom's levels
3. Include 4 different question types
4. Validate với sample students

### Bài tập 2: Automated Test Assembly
1. Design test specification template
2. Use AI để generate 50-question bank
3. Assemble 3 different test versions
4. Analyze difficulty distribution

### Bài tập 3: Interactive Question Creation
1. Create questions for Kahoot/Quizizz
2. Include multimedia elements
3. Test với real students
4. Analyze engagement và accuracy data

## 📚 Tools và Resources

### Free Question Generation:
- **ChatGPT:** Custom prompts for any subject
- **Quillionz:** Text-to-questions converter
- **Questgen:** AI-powered quiz maker
- **OpenaAI Playground:** Advanced prompt engineering

### Quiz Platforms:
- **Kahoot:** Interactive team-based quizzes
- **Quizizz:** Individual-paced quizzes
- **Gimkit:** Game-based learning
- **Blooket:** Educational games

### Assessment Tools:
- **Google Forms:** Simple quiz creation
- **Microsoft Forms:** Advanced analytics
- **Socrative:** Real-time assessment
- **Mentimeter:** Live polling

### Advanced Platforms:
- **ExamSoft:** Professional test creation
- **Respondus:** Secure testing environment
- **ProProfs:** Comprehensive quiz maker
- **TestGorilla:** Skills assessment platform

## 🎯 Tóm tắt chương

- **AI-Powered Generation:** Sử dụng ChatGPT và tools để tạo câu hỏi đa dạng và chất lượng
- **Taxonomy-Based Design:** Phân bố câu hỏi theo Bloom's taxonomy cho comprehensive assessment
- **Automated Assembly:** Tạo đề thi cân bằng tự động theo specifications
- **Multiple Formats:** Hỗ trợ tất cả loại câu hỏi từ MC đến essay và interactive
- **Quality Control:** Đảm bảo accuracy, clarity và appropriateness của câu hỏi

AI question generation giúp giáo viên tiết kiệm 90% thời gian tạo đề và tăng 300% số lượng câu hỏi chất lượng trong question bank.