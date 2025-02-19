import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/roi_marketing_platform';

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

const campaignSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        status: {
            type: String,
            enum: ['active', 'paused', 'draft', 'completed'],
            default: 'draft'
        },
        startDate: { type: Date },
        endDate: { type: Date },
        spend: { type: Number, default: 0 },
        revenue: { type: Number, default: 0 },
        roi: { type: Number, default: 0 },
        channel: { type: String }
    },
    { timestamps: true }
);

const goalSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        type: { type: String },
        targetValue: { type: Number, required: true },
        currentValue: { type: Number, default: 0 },
        deadline: { type: Date },
        status: { type: String, default: 'in progress' },
        unit: { type: String }
    },
    { timestamps: true }
);

const resourceSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        type: { type: String, enum: ['guide', 'template', 'video', 'tool', 'article'] },
        url: { type: String },
        content: { type: String } // For resources with content directly in the platform
    },
    { timestamps: true }
);

const Campaign = mongoose.model('Campaign', campaignSchema);
const Goal = mongoose.model('Goal', goalSchema);
const Resource = mongoose.model('Resource', resourceSchema);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the ROI Marketing Platform API' });
});

// Campaigns API Endpoints
app.get('/campaigns', async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.json(campaigns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/campaigns', async (req, res) => {
    const campaign = new Campaign(req.body);
    try {
        const newCampaign = await campaign.save();
        res.status(201).json(newCampaign);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/campaigns/:id', getCampaign, (req, res) => {
    res.json(res.campaign);
});

app.put('/campaigns/:id', getCampaign, async (req, res) => {
    if (req.body.name != null) {
        res.campaign.name = req.body.name;
    }
    if (req.body.status != null) {
        res.campaign.status = req.body.status;
    }
    if (req.body.startDate != null) {
        res.campaign.startDate = req.body.startDate;
    }
    if (req.body.endDate != null) {
        res.campaign.endDate = req.body.endDate;
    }
    if (req.body.spend != null) {
        res.campaign.spend = req.body.spend;
    }
    if (req.body.revenue != null) {
        res.campaign.revenue = req.body.revenue;
    }
    if (req.body.roi != null) {
        res.campaign.roi = req.body.roi;
    }
    if (req.body.channel != null) {
        res.campaign.channel = req.body.channel;
    }

    try {
        const updatedCampaign = await res.campaign.save();
        res.json(updatedCampaign);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/campaigns/:id', getCampaign, async (req, res) => {
    try {
        await Campaign.deleteOne({ _id: req.params.id });
        res.json({ message: 'Deleted Campaign' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getCampaign(req, res, next) {
    let campaign;
    try {
        campaign = await Campaign.findById(req.params.id);
        if (campaign == null) {
            return res.status(404).json({ message: 'Cannot find campaign' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.campaign = campaign;
    next();
}

// Goals API Endpoints
app.get('/goals', async (req, res) => {
    try {
        const goals = await Goal.find();
        res.json(goals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/goals', async (req, res) => {
    const goal = new Goal(req.body);
    try {
        const newGoal = await goal.save();
        res.status(201).json(newGoal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/goals/:id', getGoal, (req, res) => {
    res.json(res.goal);
});

app.put('/goals/:id', getGoal, async (req, res) => {
    if (req.body.name != null) {
        res.goal.name = req.body.name;
    }
    if (req.body.type != null) {
        res.goal.type = req.body.type;
    }
    if (req.body.targetValue != null) {
        res.goal.targetValue = req.body.targetValue;
    }
    if (req.body.currentValue != null) {
        res.goal.currentValue = req.body.currentValue;
    }
    if (req.body.deadline != null) {
        res.goal.deadline = req.body.deadline;
    }
    if (req.body.status != null) {
        res.goal.status = req.body.status;
    }
    if (req.body.unit != null) {
        res.goal.unit = req.body.unit;
    }

    try {
        const updatedGoal = await res.goal.save();
        res.json(updatedGoal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/goals/:id', getGoal, async (req, res) => {
    try {
        await Goal.deleteOne({ _id: req.params.id });
        res.json({ message: 'Deleted Goal' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getGoal(req, res, next) {
    let goal;
    try {
        goal = await Goal.findById(req.params.id);
        if (goal == null) {
            return res.status(404).json({ message: 'Cannot find goal' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.goal = goal;
    next();
}

// Resources API Endpoints
app.get('/resources', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/resources', async (req, res) => {
    const resource = new Resource(req.body);
    try {
        const newResource = await resource.save();
        res.status(201).json(newResource);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/resources/:id', getResource, (req, res) => {
    res.json(res.resource);
});

app.put('/resources/:id', getResource, async (req, res) => {
    if (req.body.title != null) {
        res.resource.title = req.body.title;
    }
    if (req.body.description != null) {
        res.resource.description = req.body.description;
    }
    if (req.body.type != null) {
        res.resource.type = req.body.type;
    }
    if (req.body.url != null) {
        res.resource.url = req.body.url;
    }
    if (req.body.content != null) {
        res.resource.content = req.body.content;
    }

    try {
        const updatedResource = await res.resource.save();
        res.json(updatedResource);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.delete('/resources/:id', getResource, async (req, res) => {
    try {
        await Resource.deleteOne({ _id: req.params.id });
        res.json({ message: 'Deleted Resource' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

async function getResource(req, res, next) {
    let resource;
    try {
        resource = await Resource.findById(req.params.id);
        if (resource == null) {
            return res.status(404).json({ message: 'Cannot find resource' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.resource = resource;
    next();
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
